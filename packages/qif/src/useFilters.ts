import { useQueryStates, Values, type UseQueryStatesKeysMap } from 'nuqs';
import { useCallback, useMemo, useState } from 'react';
import { FiltersValue } from './types';

interface UseFiltersOptions<T extends FiltersValue> {
    syncWithSearchParams?: boolean;
    parsers: UseQueryStatesKeysMap<T>;
}

export function useFilters<T extends FiltersValue>(options: UseFiltersOptions<T>) {
    const { syncWithSearchParams = true, parsers } = options;

    const getDefaultValues = useCallback(() => {
        const defaults: any = {};
        Object.keys(parsers).forEach((key) => {
            defaults[key] = parsers[key]['defaultValue'];
        });
        return defaults as T;
    }, [parsers]);

    // Initialize query states for URL parameters
    const [queryFilters, setQueryFilters] = useQueryStates(parsers);

    // Initialize local state for non-URL mode
    const [localFilters, setLocalFilters] = useState<T>(getDefaultValues);

    const filters = useMemo(
        () => (syncWithSearchParams ? queryFilters : localFilters),
        [syncWithSearchParams, queryFilters, localFilters]
    );

    const reset = useCallback(() => {
        const defaults = getDefaultValues();
        if (syncWithSearchParams) {
            setQueryFilters((prev) => ({ ...prev, ...defaults }));
        } else {
            setLocalFilters(defaults);
        }
    }, [syncWithSearchParams, getDefaultValues, setQueryFilters]);

    const handleSetFilters = useCallback(
        (newFilters: Partial<T>) => {
            if (syncWithSearchParams) {
                setQueryFilters((prev) => ({ ...prev, ...newFilters }));
            } else {
                setLocalFilters((prev) => ({
                    ...prev,
                    ...newFilters,
                }));
            }
        },
        [syncWithSearchParams, setQueryFilters]
    );

    const setValue = useCallback(
        <K extends keyof T>(name: K, value: T[K]) => {
            if (syncWithSearchParams) {
                setQueryFilters((prev) => ({ ...prev, [name]: value }));
            } else {
                setLocalFilters((prev) => ({
                    ...prev,
                    [name]: value,
                }));
            }
        },
        [syncWithSearchParams, setQueryFilters]
    );

    const getValue = useCallback(
        <K extends keyof T>(name: K): T[K] | null => {
            return filters[name] as T[K] | null;
        },
        [filters]
    );

    // Unregister a filter
    const unregister = useCallback(
        (name: keyof T) => {
            if (syncWithSearchParams) {
                setQueryFilters((prev) => {
                    const { [name]: _, ...rest } = prev;
                    return rest as Values<UseQueryStatesKeysMap<T>>;
                });
            } else {
                setLocalFilters((prev) => {
                    const { [name]: _, ...rest } = prev;
                    return rest as T;
                });
            }
        },
        [syncWithSearchParams]
    );

    const initialValues = useMemo(() => getDefaultValues(), []);

    const isResetDisabled = useMemo(
        () => JSON.stringify(filters) === JSON.stringify(initialValues),
        [filters, initialValues]
    );

    return useMemo(
        () => ({
            reset,
            filters,
            setValue,
            getValue,
            unregister,
            isResetDisabled,
            setFilters: handleSetFilters,
        }),
        [filters, handleSetFilters, setValue, getValue, reset, unregister]
    );
}
