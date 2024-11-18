import { createContext, ReactNode, useContext } from 'react'
import { useFilters } from './useFilters'
import { FiltersValue } from './types';

type FiltersContextValue<T extends FiltersValue> = ReturnType<typeof useFilters<T>>

interface FiltersProviderProps<T extends FiltersValue> {
    children: ReactNode
    instance: FiltersContextValue<T>;
}

// Create context with a default value of null
const FiltersContext = createContext<FiltersContextValue<FiltersValue> | null>(null)

export function FiltersProvider<T extends FiltersValue>({
    children,
    instance
}: FiltersProviderProps<T>) {
    return (
        <FiltersContext.Provider value={instance as FiltersContextValue<FiltersValue>}>
            {children}
        </FiltersContext.Provider>
    )
}

export const useFiltersContext = <T extends FiltersValue>() => {
    const context = useContext(FiltersContext) as FiltersContextValue<T> | null
    if (!context) {
        throw new Error('useFiltersContext must be used within a FiltersProvider')
    }
    return context
}

