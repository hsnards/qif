"use client";

export function Api() {
  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-red-600 dark:text-white">
          FiltersProvider
        </h2>
        <p className="text-gray-700 dark:text-red-100">
          The FiltersProvider component is the core of Qif. It manages the
          filter state and provides context to child components.
        </p>
        <h3 className="text-xl font-semibold text-red-600 dark:text-white">
          Props
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-red-100">
          <li>
            <code className="text-sm bg-gray-100 dark:bg-red-800 px-1 py-0.5 rounded text-red-600 dark:text-white">
              filters: T
            </code>{" "}
            - The current filter state
          </li>
          <li>
            <code className="text-sm bg-gray-100 dark:bg-red-800 px-1 py-0.5 rounded text-red-600 dark:text-white">
              setFilters: Dispatch&lt;SetStateAction&lt;T&gt;&gt;
            </code>{" "}
            - Function to update the filter state
          </li>
          <li>
            <code className="text-sm bg-gray-100 dark:bg-red-800 px-1 py-0.5 rounded text-red-600 dark:text-white">
              syncSearchParams?: boolean
            </code>{" "}
            - Whether to sync filters with URL search params (default: false)
          </li>
          <li>
            <code className="text-sm bg-gray-100 dark:bg-red-800 px-1 py-0.5 rounded text-red-600 dark:text-white">
              onBeforeStateChange?: (filters: T, reason: keyof T | 'clear')
              =&gt; T
            </code>{" "}
            - Optional callback before state changes
          </li>
        </ul>
      </section>
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight text-red-600 dark:text-white">
          useFilters Hook
        </h2>
        <p className="text-gray-700 dark:text-red-100">
          The useFilters hook provides methods to interact with the filter
          state.
        </p>
        <h3 className="text-xl font-semibold text-red-600 dark:text-white">
          Methods
        </h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-red-100">
          <li>
            <code className="text-sm bg-gray-100 dark:bg-red-800 px-1 py-0.5 rounded text-red-600 dark:text-white">
              register(name: keyof T, defaultValue?: unknown)
            </code>{" "}
            - Registers a new filter
          </li>
          <li>
            <code className="text-sm bg-gray-100 dark:bg-red-800 px-1 py-0.5 rounded text-red-600 dark:text-white">
              unregister(name: keyof T)
            </code>{" "}
            - Unregisters a filter
          </li>
          <li>
            <code className="text-sm bg-gray-100 dark:bg-red-800 px-1 py-0.5 rounded text-red-600 dark:text-white">
              setValue(name: keyof T, value: unknown)
            </code>{" "}
            - Sets the value of a filter
          </li>
          <li>
            <code className="text-sm bg-gray-100 dark:bg-red-800 px-1 py-0.5 rounded text-red-600 dark:text-white">
              getValue(name: keyof T)
            </code>{" "}
            - Gets the current value of a filter
          </li>
          <li>
            <code className="text-sm bg-gray-100 dark:bg-red-800 px-1 py-0.5 rounded text-red-600 dark:text-white">
              reset()
            </code>{" "}
            - Resets all filters to their default values
          </li>
          <li>
            <code className="text-sm bg-gray-100 dark:bg-red-800 px-1 py-0.5 rounded text-red-600 dark:text-white">
              isResetDisabled()
            </code>{" "}
            - Checks if the reset action is disabled
          </li>
        </ul>
      </section>
    </div>
  );
}
