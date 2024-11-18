'use client'


export function Api() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">FiltersProvider</h2>
        <p className="text-muted-foreground">
          The FiltersProvider component is the core of Qif. It manages the filter state and provides context to child components.
        </p>
        <h3 className="text-xl font-semibold text-foreground">Props</h3>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">instance: FiltersContextValue&lt;T&gt;</code> - The filters instance created by useFilters hook</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">children: ReactNode</code> - Child components that will have access to the filters context</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">useFilters Hook</h2>
        <p className="text-muted-foreground">
          The useFilters hook provides methods to create and manage filter states.
        </p>
        <h3 className="text-xl font-semibold text-foreground">Options</h3>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">syncWithSearchParams?: boolean</code> - Whether to sync filters with URL search params (default: true)</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">parsers: UseQueryStatesKeysMap&lt;T&gt;</code> - Object containing filter parsers with their default values</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground">Parsers</h3>
        <p className="text-muted-foreground">
          Qif uses <a href="https://nuqs.47ng.com/docs/parsers/built-in" className="text-primary hover:underline">nuqs parsers</a> to handle different data types in URL parameters. Here are the available built-in parsers:
        </p>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">parseAsString</code> - For string values with optional default value</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">parseAsInteger</code> - For integer values</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">parseAsFloat</code> - For floating-point numbers</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">parseAsBoolean</code> - For boolean values</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">parseAsStringLiteral</code> - For specific string values (type-safe)</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">parseAsNumberLiteral</code> - For specific number values (type-safe)</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">parseAsArrayOf</code> - For arrays of any other parser type</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">parseAsJson</code> - For complex JSON objects with validation</li>
        </ul>

        <h4 className="text-lg font-semibold text-foreground mt-4">Example Usage</h4>
        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
          <code className="text-sm text-muted-foreground">
{`import { useFilters } from 'react-qif'
import { parseAsString, parseAsInteger, parseAsArrayOf } from 'nuqs'

const filtersInstance = useFilters({
  syncWithSearchParams: true,
  parsers: {
    search: parseAsString.withDefault(''),
    page: parseAsInteger.withDefault(1),
    categories: parseAsArrayOf(parseAsString).withDefault([])
  }
})`}
          </code>
        </pre>

        <h3 className="text-xl font-semibold text-foreground">Return Value</h3>
        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">filters: T</code> - Current filter values</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">setValue(name: keyof T, value: T[K])</code> - Sets the value of a specific filter</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">getValue(name: keyof T)</code> - Gets the current value of a filter</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">setFilters(newFilters: Partial&lt;T&gt;)</code> - Updates multiple filter values at once</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">unregister(name: keyof T)</code> - Removes a filter</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">reset()</code> - Resets all filters to their default values</li>
          <li><code className="text-sm bg-muted px-1 py-0.5 rounded">isResetDisabled: boolean</code> - Whether the reset action is disabled</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">useFiltersContext Hook</h2>
        <p className="text-muted-foreground">
          The useFiltersContext hook provides access to the filters context within child components.
        </p>
        <p className="text-muted-foreground">
          Returns the same interface as useFilters hook. Must be used within a FiltersProvider component.
        </p>
      </section>
    </div>
  )
}