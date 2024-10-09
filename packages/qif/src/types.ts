import { Dispatch, SetStateAction } from 'react';

export type FiltersValue = Record<string, unknown>;

export interface FiltersContextType<T extends FiltersValue> {
  filters: T;
  reset: () => void;
  isResetDisabled: boolean;
  unregister: (name: keyof T) => void;
  getValue: (name: keyof T) => unknown;
  setFilters: Dispatch<SetStateAction<T>>;
  setValue: (name: keyof T, value: unknown) => void;
  register: (name: keyof T, defaultValue: unknown) => void;
}

export interface FilterProviderProps<T extends FiltersValue> {
  filters: T;
  syncSearchParams?: boolean;
  setFilters: Dispatch<SetStateAction<T>>;
  onBeforStateChange?: (_: FiltersValue, reason: keyof T | 'clear') => T;
}
