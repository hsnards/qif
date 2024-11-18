<div align="center">
  <h1>🎯 Qif</h1>
  <p><strong>Powerful filtering system for React.js applications</strong></p>
</div>

<div align="center">
  
[![NPM](https://img.shields.io/npm/v/react-qif.svg)](https://www.npmjs.com/package/react-qif)
[![Size](https://badgen.net/bundlephobia/minzip/react-qif)](https://bundlephobia.com/result?p=react-qif@latest)
[![GitHub contributors](https://img.shields.io/github/contributors/hsnards/qif.svg)](https://GitHub.com/hsnards/qif/contributors/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/hsnards/qif/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/hsnards/qif/compare)

</div>

## ✨ Features

- 🔄 **Centralized State System** - Efficient application state management
- 🎨 **Headless UI** - Flexible, unstyled components for full customization
- 🧩 **Composable Components** - Build complex UIs with simple, reusable parts
- 🔗 **URL Sync** - Built on nuqs for robust URL state management
- 🛠️ **Developer-Friendly API** - Intuitive design for seamless development
- ⚡ **Performance Optimized** - Smooth handling of large datasets

## 📦 Installation

```bash
# Using npm
npm install react-qif nuqs

# Using yarn
yarn add react-qif nuqs
```

## 🚀 Quick Start

```tsx
import { useFilters, FiltersProvider, useFiltersContext } from 'react-qif';
import { parseAsString } from 'nuqs';

type FiltersType = {
  search: string;
  category: string;
};

const App = () => {
  const filtersInstance = useFilters({
    parsers: {
      search: parseAsString.withDefault(''),
      category: parseAsString.withDefault('test')
    }
  });

  return (
    <FiltersProvider instance={filtersInstance}>
      <SearchFilter />
    </FiltersProvider>
  );
};

const SearchFilter = () => {
  const { getValue, setValue } = useFiltersContext<FiltersType>();

  return (
    <input
      value={getValue('search') || ''}
      onChange={(e) => setValue('search', e.target.value)}
    />
  );
};
```

## 🔧 Setup

### 1. Configure NuqsAdapter

#### For Next.js:
```tsx
import { NuqsAdapter } from 'nuqs/adapters/next';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
```

#### For React:
```tsx
import { NuqsAdapter } from 'nuqs/adapters/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NuqsAdapter>
      <App />
    </NuqsAdapter>
  </StrictMode>
);
```

## 📚 API Reference

### FiltersProvider Props
- `instance`: Filter instance created by useFilters
- `children`: React nodes

### useFilters Hook Options
```tsx
interface UseFiltersOptions<T extends FiltersValue> {
    syncWithSearchParams?: boolean;
    parsers: UseQueryStatesKeysMap<T>;
}
```

### useFiltersContext Hook
Returns an object with the following methods:
- `register(name, defaultValue)`: Register a filter with default value
- `unregister(name)`: Remove a filter
- `setValue(name, value)`: Update filter value
- `getValue(name)`: Get current filter value
- `reset()`: Reset all filters to defaults
- `isResetDisabled`: Check if reset is available

## 🔄 Client-Side Filtering

Unlike nuqs, Qif also supports client-side filtering. By setting `syncWithSearchParams` to `false`, no parameters will be added to the URL. This is useful for temporary filters or when you don't want to persist the filter state in the URL.

### Client-Side Example
```tsx
const App = () => {
  const filtersInstance = useFilters({
    syncWithSearchParams: false, // Disable URL synchronization
    parsers: {
      search: parseAsString.withDefault(''),
      category: parseAsString.withDefault('all')
    }
  });

  return (
    <FiltersProvider instance={filtersInstance}>
      <ProductFilters />
      <ProductList />
    </FiltersProvider>
  );
};

const ProductFilters = () => {
  const { getValue, setValue } = useFiltersContext();

  return (
    <div className="filters">
      <input
        value={getValue('search') || ''}
        onChange={(e) => setValue('search', e.target.value)}
        placeholder="Search products..."
      />
      
      <select
        value={getValue('category') || 'all'}
        onChange={(e) => setValue('category', e.target.value)}
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
    </div>
  );
};

const ProductList = () => {
  const { getValue } = useFiltersContext();
  const searchTerm = getValue('search') as string;
  const category = getValue('category') as string;

  // Filter your products based on searchTerm and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || product.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
```

This example demonstrates:
- Client-side filtering without URL parameter synchronization
- Multiple filter types (search input and category select)
- Real-time filtering of product list
- Type-safe filter values with TypeScript

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check [issues page](https://github.com/hsnards/qif/issues).

## 📄 License

MIT © [Hasan Ardestani](https://github.com/hsnards)