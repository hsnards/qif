"use client";

export function UsageComponent() {
  return (
      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-red-600 dark:text-white">
            Basic Usage
          </h2>
          <p className="text-gray-700 dark:text-red-100">
            To use Qif in your React application, you need to wrap your
            components with the FiltersProvider and use the useFilters hook to
            manage your filters.
          </p>
          <pre className="bg-gray-100 dark:bg-red-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm text-gray-800 dark:text-red-100">
              {`import { FiltersProvider, useFilters } from 'qif';
import { useState } from 'react';

const App = () => {
  const [filters, setFilters] = useState({});

  return (
    <FiltersProvider syncSearchParams filters={filters} setFilters={setFilters}>
      <FilterComponent />
      <ResetButton />
    </FiltersProvider>
  );
};

const FilterComponent = () => {
  const { register, setValue, getValue } = useFilters();
  
  useEffect(() => {
    register('myFilter', '');
  }, [register]);

  const handleChange = (e) => setValue('myFilter', e.target.value);

  return (
    <input
      type="text"
      value={getValue('myFilter') || ''}
      onChange={handleChange}
      placeholder="Filter..."
    />
  );
};

const ResetButton = () => {
  const { reset, isResetDisabled } = useFilters();

  return (
    <button onClick={reset} disabled={isResetDisabled()}>
      Reset Filters
    </button>
  );
};`}
            </code>
          </pre>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-red-600 dark:text-white">
            Key Concepts
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-red-100">
            <li>
              FiltersProvider: Wraps your app and provides the filter context
            </li>
            <li>useFilters: A hook to access and manage filter states</li>
            <li>
              register: Registers a new filter with an optional default value
            </li>
            <li>setValue: Updates the value of a specific filter</li>
            <li>getValue: Retrieves the current value of a filter</li>
            <li>reset: Resets all filters to their initial values</li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-red-600 dark:text-white">
            URL Synchronization
          </h2>
          <p className="text-gray-700 dark:text-red-100">
            When syncSearchParams is set to true, Qif automatically syncs your
            filter states with URL search parameters, allowing for shareable and
            bookmarkable filter states.
          </p>
        </section>
      </div>
  );
}
