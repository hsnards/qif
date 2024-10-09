import { isNil } from 'ramda';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterProviderProps, FiltersContextType, FiltersValue } from './types';

export const FiltersProvider = <T extends FiltersValue>(
  props: PropsWithChildren<FilterProviderProps<T>>,
) => {
  const { children, filters, syncSearchParams, onBeforStateChange } = props;
  //NOTICE : We had to reassign the value here to solve the typescript problem
  const setFilters = props.setFilters as Dispatch<SetStateAction<FiltersValue>>;

  const defaultValueRef = useRef<Partial<T>>(filters);
  const [, setSearchParams] = useSearchParams();

  const register = useCallback(
    (name: keyof T, defaultValue: unknown) => {
      const searchValue = new URLSearchParams(window.location.search).get(String(name));

      let value = defaultValue;

      if (syncSearchParams && searchValue !== null) {
        value = searchValue?.includes(',') ? searchValue.split(',') : searchValue;
      }

      setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));

      defaultValueRef.current = {
        ...defaultValueRef.current,
        [name]: defaultValue,
      };
    },
    [setFilters, syncSearchParams],
  );

  const unregister = useCallback(
    (name: keyof T) => {
      setFilters((prev) => {
        const { [name]: _, ...rest } = prev;

        return rest;
      });

      if (syncSearchParams) {
        setSearchParams((prev) => {
          const newSearchParams = new URLSearchParams(prev);

          newSearchParams.delete(String(name));

          return newSearchParams;
        });
      }
    },
    [setFilters, syncSearchParams, setSearchParams],
  );

  const setValue = useCallback(
    (name: keyof T, value: unknown) => {
      setFilters((prevFilters) =>
        onBeforStateChange
          ? onBeforStateChange({ ...prevFilters, [name]: value }, name)
          : { ...prevFilters, [name]: value },
      );

      // Update search params
      if (syncSearchParams) {
        setSearchParams((prev) => {
          const newSearchParams = new URLSearchParams(prev);

          if (isNil(value)) {
            newSearchParams.delete(String(name)); // Remove if value is null or undefined
          } else {
            newSearchParams.set(String(name), String(value));
          }

          return newSearchParams;
        });
      }
    },
    [setSearchParams, setFilters, syncSearchParams],
  );

  const getValue = useCallback((name: keyof T) => (filters ? filters[name] : null), [filters]);

  const reset = useCallback(() => {
    setFilters( onBeforStateChange ? onBeforStateChange(defaultValueRef.current, 'clear') :  defaultValueRef.current);
    if (syncSearchParams) {
      setSearchParams(new URLSearchParams());
    }
  }, [setFilters, setSearchParams, syncSearchParams,onBeforStateChange]);

  const isResetDisabled = useMemo(
    () => JSON.stringify(filters) === JSON.stringify(defaultValueRef.current),
    [filters],
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

const FiltersContext = createContext<FiltersContextType<FiltersValue> | null>(null);

export const useFilters = <T extends FiltersValue>() => {
  const context = useContext(FiltersContext) as FiltersContextType<T> | null;
  if (!context) {
    throw new Error('useFilters must be used within a FiltersProvider');
  }
  return context;
};
