'use client'


export function Api() {
  return (
      <div className="space-y-6">
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">FiltersProvider</h2>
          <p className="text-muted-foreground">
            The FiltersProvider component is the core of Qif. It manages the filter state and provides context to child components.
          </p>
          <h3  className="text-xl font-semibold text-foreground">Props</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">filters: T</code> - The current filter state</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">setFilters: Dispatch&lt;SetStateAction&lt;T&gt;&gt;</code> - Function to update the filter state</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">syncSearchParams?: boolean</code> - Whether to sync filters with URL search params (default: false)</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">onBeforeStateChange?: (filters: T, reason: keyof T | 'clear') =&gt; T</code> - Optional callback before state changes</li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">useFilters Hook</h2>
          <p className="text-muted-foreground">
            The useFilters hook provides methods to interact with the filter state.
          </p>
          <h3 className="text-xl font-semibold text-foreground">Methods</h3>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">register(name: keyof T, defaultValue?: unknown)</code> - Registers a new filter</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">unregister(name: keyof T)</code> - Unregisters a filter</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">setValue(name: keyof T, value: unknown)</code> - Sets the value of a filter</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">getValue(name: keyof T)</code> - Gets the current value of a filter</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">reset()</code> - Resets all filters to their default values</li>
            <li><code className="text-sm bg-muted px-1 py-0.5 rounded">isResetDisabled</code> - Checks if the reset action is disabled</li>
          </ul>
        </section>
      </div>
  )
}