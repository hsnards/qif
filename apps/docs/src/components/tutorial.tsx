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
          First, initialize your filters using the useFilters hook with your parsers:

        </p>
        <div className="bg-gray-500/10 p-4 rounded-md">
          <pre className="overflow-x-auto">
            <code className="text-sm text-muted-foreground">
              <CodeBlock
                code={`import { useFilters, FiltersProvider } from 'react-qif';
import { parseAsString } from 'nuqs';

const App = () => {
  const filtersInstance = useFilters({
    parsers: {
      search: parseAsString.withDefault(''),
      category: parseAsString.withDefault('test')
    }
  });

  return (
    <FiltersProvider instance={filtersInstance}>
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
          Step 2: Set up NuqsAdapter
        </h3>
        <p className="text-muted-foreground">
          Since Qif uses nuqs internally, you need to select and set up the appropriate NuqsAdapter for your framework:
        </p>
        <h6 className="text-md font-semibold text-foreground mt-4">
          For React Applications
        </h6>
        <div className="bg-gray-500/10 p-4 rounded-md">
          <pre className="overflow-x-auto">
            <code className="text-sm text-muted-foreground">
              <CodeBlock
                code={`import { NuqsAdapter } from 'nuqs/adapters/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NuqsAdapter>
      <App />
    </NuqsAdapter>
  </StrictMode>
);`}
              />
            </code>
          </pre>
        </div>

        <h6 className="text-md font-semibold text-foreground mt-4">
          For Next.js Applications
        </h6>
        <div className="bg-gray-500/10 p-4 rounded-md">
          <pre className="overflow-x-auto">
            <code className="text-sm text-muted-foreground">
              <CodeBlock
                code={`import { NuqsAdapter } from 'nuqs/adapters/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );`}
              />
            </code>
          </pre>
        </div>



        <div className="bg-yellow-500/10 p-4 rounded-md mt-4">
          <p className="text-muted-foreground">
            For more information about NuqsAdapter configuration, read{'   '}
            <a
              href="https://nuqs.47ng.com/docs/adapters"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
            </a>
          </p>
        </div>
      </section>
      <section className="space-y-3">
        <h3 className="text-xl font-semibold text-foreground">
          Step 3: Create a custom filter component
        </h3>
        <p className="text-muted-foreground">
          Now, let's create a custom filter component using the useFiltersContext hook:
        </p>
        <div className="bg-gray-500/10 p-4 rounded-md">
          <pre className="overflow-x-auto">
            <code className="text-sm text-muted-foreground">
              <CodeBlock
                code={`import { useFiltersContext } from 'react-qif';

const CustomFilter = ({ name }) => {
  const { setValue, getValue } = useFiltersContext();

  const handleChange = (e) => setValue(name, e.target.value);

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        type="text"
        value={getValue(name)}
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
          Step 4: Use the custom filter in your app
        </h3>
        <p className="text-muted-foreground">
          Now you can use your custom filter component in your app:
        </p>
        <div className="bg-gray-500/10 p-4 rounded-md">
          <pre className="overflow-x-auto">
            <code className="text-sm text-muted-foreground">
              <CodeBlock
                code={`import { parseAsString } from 'nuqs';

const App = () => {
  const filtersInstance = useFilters({
    syncWithSearchParams: true,
    parsers: {
      search: parseAsString.withDefault(''),
      category: parseAsString.withDefault('test')
    }
  });

  return (
    <FiltersProvider instance={filtersInstance}>
      <CustomFilter name="search" />
      <CustomFilter name="category" />
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
          Step 5: Create a reset button
        </h3>
        <p className="text-muted-foreground">
          Let's add a reset button to clear all filters to default values:
        </p>
        <div className="bg-gray-500/10 p-4 rounded-md">
          <pre className="overflow-x-auto">
            <code className="text-sm text-muted-foreground">
              <CodeBlock
                code={`import { useFiltersContext } from 'react-qif';

const ResetButton = () => {
  const { reset, isResetDisabled } = useFiltersContext();

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
          Step 6: Use filter values
        </h3>
        <p className="text-muted-foreground">
          Finally, use the filter values in your components:
        </p>
        <div className="bg-gray-500/10 p-4 rounded-md">
          <pre className="overflow-x-auto">
            <code className="text-sm text-muted-foreground">
              <CodeBlock
                code={`import { useFiltersContext } from 'react-qif';

const FilteredContent = () => {
  const { getValue, filters } = useFiltersContext();

  const searchTerm = getValue('search');
  const category = getValue('category');

  // You can also access all filters directly
  console.log('All filters:', filters);

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
