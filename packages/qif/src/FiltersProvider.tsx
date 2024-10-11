import { isNil } from "ramda";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import { FilterProviderProps, FiltersContextType, FiltersValue } from "./types";
import { parseSearchParams, setSearchParams } from "./utils";

export const FiltersProvider = <T extends FiltersValue>(
  props: PropsWithChildren<FilterProviderProps<T>>
) => {
  const { children, filters, syncSearchParams, onBeforStateChange } = props;
  //NOTICE : We had to reassign the value here to solve the typescript problem
  const setFilters = props.setFilters as Dispatch<SetStateAction<FiltersValue>>;

  const defaultValueRef = useRef<Partial<T>>(filters);

  const register = useCallback(
    (name: keyof T, defaultValue: unknown) => {
      const searchParams = parseSearchParams();
      const searchValue = searchParams[String(name)];

      let value = defaultValue;

      if (syncSearchParams && searchValue !== undefined) {
        value = searchValue;
      }

      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));

      defaultValueRef.current = {
        ...defaultValueRef.current,
        [name]: defaultValue,
      };
    },
    [setFilters, syncSearchParams]
  );

  const unregister = useCallback(
    (name: keyof T) => {
      setFilters((prev) => {
        const { [name]: _, ...rest } = prev;

        return rest;
      });

      if (syncSearchParams) {
        const searchParams = parseSearchParams();
        delete searchParams[String(name)];

        setSearchParams(searchParams);
      }
    },
    [setFilters, syncSearchParams]
  );

  const setValue = useCallback(
    (name: keyof T, value: unknown) => {
      setFilters((prevFilters) => {
        const updatedFilters = { ...prevFilters, [name]: value };
        return onBeforStateChange
          ? onBeforStateChange(updatedFilters, name)
          : updatedFilters;
      });

      // Update search params
      if (syncSearchParams) {
        const searchParams = parseSearchParams();

        if (isNil(value)) {
          delete searchParams[String(name)];
        } else {
          searchParams[String(name)] = value as qs.ParsedQs;
        }

        setSearchParams(searchParams);
      }
    },
    [setFilters, syncSearchParams]
  );

  const getValue = useCallback(
    (name: keyof T) => (filters ? filters[name] : null),
    [filters]
  );

  const reset = useCallback(() => {
    setFilters(
      onBeforStateChange
        ? onBeforStateChange(defaultValueRef.current, "clear")
        : defaultValueRef.current
    );
    if (syncSearchParams) {
      setSearchParams({});
    }
  }, [setFilters, syncSearchParams, onBeforStateChange]);

  const isResetDisabled = useMemo(
    () => JSON.stringify(filters) === JSON.stringify(defaultValueRef.current),
    [filters]
  );

  return (
    <FiltersContext.Provider
      value={{
        reset,
        filters,
        register,
        setValue,
        getValue,
        unregister,
        setFilters,
        isResetDisabled,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

const FiltersContext = createContext<FiltersContextType<FiltersValue> | null>(
  null
);

export const useFilters = <T extends FiltersValue>() => {
  const context = useContext(FiltersContext) as FiltersContextType<T> | null;
  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }
  return context;
};
