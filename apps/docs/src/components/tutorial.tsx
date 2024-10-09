'use client'


export function TutorialComponent() {
  return (
      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-red-600 dark:text-white">Creating Custom Filters with Qif</h2>
          <p className="text-gray-700 dark:text-red-100">
            This tutorial will guide you through the process of creating custom filter components using the Qif package.
          </p>
        </section>
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-red-600 dark:text-white">Step 1: Set up filter state</h3>
          <p className="text-gray-700 dark:text-red-100">
            First, initialize your filter state using useState in your main component:
          </p>
          <pre className="bg-gray-100 dark:bg-red-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm text-gray-800 dark:text-red-100">
{`import { useState } from 'react';
import { FiltersProvider } from 'qif';

const App = () => {
  const [filters, setFilters] = useState({});

  return (
    <FiltersProvider syncSearchParams filters={filters} setFilters={setFilters}>
      {/* Your app content */}
    </FiltersProvider>
  );
};`}
            </code>
          </pre>
        </section>
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-red-600 dark:text-white">Step 2: Create a custom filter component</h3>
          <p className="text-gray-700 dark:text-red-100">
            Now, let's create a custom filter component using the useFilters hook:
          </p>
          <pre className="bg-gray-100 dark:bg-red-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm text-gray-800 dark:text-red-100">
{`import { useFilters } from 'qif';
import { useEffect } from 'react';

const CustomFilter = ({ name, defaultValue = '' }) => {
  const { register, setValue, getValue } = useFilters();

  useEffect(() => {
    register(name, defaultValue);
  }, [name, defaultValue, register]);

  const handleChange = (e) => setValue(name, e.target.value);

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        type="text"
        value={getValue(name) || defaultValue}
        onChange={handleChange}
        placeholder={\`Enter \${name}...\`}
      />
    </div>
  );
};`}
            </code>
          </pre>
        </section>
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-red-600 dark:text-white">Step 3: Use the custom filter in your app</h3>
          <p className="text-gray-700 dark:text-red-100">
            Now you can use your custom filter component in your app:
          </p>
          <pre className="bg-gray-100 dark:bg-red-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm text-gray-800 dark:text-red-100">
{`const App = () => {
  const [filters, setFilters] = useState({});

  return (
    <FiltersProvider syncSearchParams filters={filters} setFilters={setFilters}>
      <CustomFilter name="search" defaultValue="" />
      <CustomFilter name="category" defaultValue="all" />
      {/* Other components */}
    </FiltersProvider>
  );
};`}
            </code>
          </pre>
        </section>
        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-red-600 dark:text-white">Step 4: Create a reset button</h3>
          <p className="text-gray-700 dark:text-red-100">
            Let's add a reset button to clear all filters:
          </p>
          <pre className="bg-gray-100 dark:bg-red-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm text-gray-800 dark:text-red-100">
{`import { useFilters } from 'qif';

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
          <h3 className="text-xl font-semibold text-red-600 dark:text-white">Step 5: Use filter values</h3>
          <p className="text-gray-700 dark:text-red-100">
            Finally, use the filter values in your components:
          </p>
          <pre className="bg-gray-100 dark:bg-red-800 p-4 rounded-md overflow-x-auto">
            <code className="text-sm text-gray-800 dark:text-red-100">
{`import { useFilters } from 'qif';

const FilteredContent = () => {
  const { getValue } = useFilters();

  const searchTerm = getValue('search');
  const category = getValue('category');

  // Use these values to filter your content
  return (
    <div>
      <h2>Filtered Results</h2>
      <p>Search: {searchTerm}</p>
      <p>Category: {category}</p>
      {/* Render your filtered content here */}
    </div>
  );
};`}
            </code>
          </pre>
        </section>
      </div>
  )
}