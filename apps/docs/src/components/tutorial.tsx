import { CodeBlock } from "./CodeBlock";

export function TutorialComponent() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Creating Custom Filters with react-Qif
        </h2>
        <p className="text-muted-foreground">
          This tutorial will guide you through the process of creating custom
          filter components using the Qif package.
        </p>
      </section>
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">
          Step 1: Set up filter state
        </h3>
        <p className="text-muted-foreground">
          First, initialize your filter state using useState in your main
          component:
        </p>
        <div className="bg-gray-500/10 p-4 rounded-md">
          <pre className="overflow-x-auto">
            <code className="text-sm text-muted-foreground">
              <CodeBlock
                code={`import { useState } from 'react';
import { FiltersProvider } from 'react-qif';

const App = () => {
  const [filters, setFilters] = useState({});

  return (
    <FiltersProvider syncSearchParams filters={filters} setFilters={setFilters}>
      {/* Your app content */}
    </FiltersProvider>
  );
};`}
              />
            </code>
          </pre>
        </div>
      </section>
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">
          Step 2: Create a custom filter component
        </h3>
        <p className="text-muted-foreground">
          Now, let's create a custom filter component using the useFilters hook:
        </p>
        <p className="text-muted-foreground">
          The register function registers each filter with its own name and
          default value in the filters store.
        </p>
        <div className="bg-gray-500/10 p-4 rounded-md">
          <pre className="overflow-x-auto">
            <code className="text-sm text-muted-foreground">
              <CodeBlock
                code={`import { useFilters } from 'react-qif';
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
              />
            </code>
          </pre>
        </div>
      </section>
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">
          Step 3: Use the custom filter in your app
        </h3>
        <p className="text-muted-foreground">
          Now you can use your custom filter component in your app:
        </p>
        <div className="bg-gray-500/10 p-4 rounded-md">
          <pre className="overflow-x-auto">
            <code className="text-sm text-muted-foreground">
              <CodeBlock
                code={`const App = () => {
  const [filters, setFilters] = useState({});

  return (
    <FiltersProvider syncSearchParams filters={filters} setFilters={setFilters}>
      <CustomFilter name="search" defaultValue="" />
      <CustomFilter name="category" defaultValue="all" />
      {/* Other components */}
    </FiltersProvider>
  );
};`}
              />
            </code>
          </pre>
        </div>
      </section>
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">
          Step 4: Create a reset button
        </h3>
        <p className="text-muted-foreground">
          Let's add a reset button to clear all filters to default values:
        </p>
        <div className="bg-gray-500/10 p-4 rounded-md">
          <pre className="overflow-x-auto">
            <code className="text-sm text-muted-foreground">
              <CodeBlock
                code={`import { useFilters } from 'react-qif';

const ResetButton = () => {
  const { reset, isResetDisabled } = useFilters();

  return (
    <button onClick={reset} disabled={isResetDisabled}>
      Reset Filters 
    </button>
  );
};`}
              />
            </code>
          </pre>
        </div>
      </section>
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">
          Step 5: Use filter values
        </h3>
        <p className="text-muted-foreground">
          Finally, use the filter values in your components:
        </p>
        <div className="bg-gray-500/10 p-4 rounded-md">
          <pre className="overflow-x-auto">
            <code className="text-sm text-muted-foreground">
              <CodeBlock
                code={`import { useFilters } from 'react-qif';

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
              />
            </code>
          </pre>
        </div>
      </section>
    </div>
  );
}
