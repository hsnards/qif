'use client'


export function ExamplesComponent() {
  return (
      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-red-600 dark:text-white">Basic Filter Component</h2>
          <p className="text-gray-700 dark:text-red-100">
            Here's an example of a basic filter component using the useFilters hook:
          </p>
          <pre className="bg-gray-100 dark:bg-red-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm text-gray-800 dark:text-red-100">
{`import { useFilters } from 'qif';
import { useEffect } from 'react';

export const FilterComponent = ({ name, defaultValue = '' }) => {
  const { register, setValue, getValue } = useFilters();

  useEffect(() => {
    register(name, defaultValue);
  }, [name, register, defaultValue]);

  const handleChange = (e) => setValue(name, e.target.value);

  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder={\`Filter: \${name}\`}
      value={getValue(name) || defaultValue}
    />
  );
};`}
            </code>
          </pre>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-red-600 dark:text-white">Reset Button Component</h2>
          <p className="text-gray-700 dark:text-red-100">
            Here's an example of a reset button component that resets all filters:
          </p>
          <pre className="bg-gray-100 dark:bg-red-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm text-gray-800 dark:text-red-100">
{`import { useFilters } from 'qif';

export const ResetButton = () => {
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
          <h2 className="text-2xl font-semibold tracking-tight text-red-600 dark:text-white">Complex Filter Example</h2>
          <p className="text-gray-700 dark:text-red-100">
            Here's a more complex example showing multiple filters and URL synchronization:
          </p>
          <pre className="bg-gray-100 dark:bg-red-800  p-4 rounded-md overflow-x-auto">
            <code className="text-sm text-gray-800 dark:text-red-100">
{`import { FiltersProvider, useFilters } from 'qif';
import { useState, useEffect } from 'react';

const App = () => {
  const [filters, setFilters] = useState({});

  return (
    <FiltersProvider syncSearchParams filters={filters} setFilters={setFilters}>
      <SearchFilter />
      <CategoryFilter />
      <PriceRangeFilter />
      <ResetButton />
      <FilteredResults />
    </FiltersProvider>
  );
};

const SearchFilter = () => {
  const { register, setValue, getValue } = useFilters();
  useEffect(() => { register('search', ''); }, [register]);

  return (
    <input
      type="text"
      value={getValue('search') || ''}
      onChange={(e) => setValue('search', e.target.value)}
      placeholder="Search..."
    />
  );
};

const CategoryFilter = () => {
  const { register, setValue, getValue } = useFilters();
  useEffect(() => { register('category', ''); }, [register]);

  return (
    <select
      value={getValue('category') || ''}
      onChange={(e) => setValue('category', e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="electronics">Electronics</option>
      <option value="books">Books</option>
      <option value="clothing">Clothing</option>
    </select>
  );
};

const PriceRangeFilter = () => {
  const { register, setValue, getValue } = useFilters();
  useEffect(() => { 
    register('minPrice', 0);
    register('maxPrice', 1000);
  }, [register]);

  return (
    <div>
      <input
        type="number"
        value={getValue('minPrice') || 0}
        onChange={(e) => setValue('minPrice', Number(e.target.value))}
        placeholder="Min Price"
      />
      <input
        type="number"
        value={getValue('maxPrice') || 1000}
        onChange={(e) => setValue('maxPrice', Number(e.target.value))}
        placeholder="Max Price"
      />
    </div>
  );
};

const FilteredResults = () => {
  const { getValue } = useFilters();
  // Use the filter values to fetch or filter your data
  const search = getValue('search');
  const category = getValue('category');
  const minPrice = getValue('minPrice');
  const maxPrice = getValue('maxPrice');

  // Render your filtered results here
  return (
    <div>
      <h3>Filtered Results</h3>
      <p>Search: {search}</p>
      <p>Category: {category}</p>
      <p>Price Range: {minPrice} - {maxPrice}</p>
    </div>
  );
};`}
            </code>
          </pre>
        </section>
      </div>
  )
}