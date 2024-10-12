
<h1 align="center">Qif</h1>
<p align="center">Powerful filtering system for React.js applications</p>
<div align="center">

[![NPM](https://img.shields.io/npm/v/react-qif.svg)](https://www.npmjs.com/package/react-qif)
[![Size](https://badgen.net/bundlephobia/minzip/react-qif)](https://bundlephobia.com/result?p=react-qif@latest)
[![GitHub contributors](https://img.shields.io/github/contributors/hsnards/qif.svg)](https://GitHub.com/hsnards/qif/contributors/)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/hsnards/qif/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange.svg)](https://github.com/hsnards/qif/compare)

</div>

## Home

### Introduction
FiltersProvider is a React component that allows for managing and synchronizing filter states with URL search parameters. This library simplifies handling filters in your React applications by allowing you to manage filter state externally and sync it with the URL.

### Getting Started
Learn how to get started with the FiltersProvider package by following the installation and usage instructions.

---

## Installation

### Install the Package
To install the FiltersProvider package in your project, use the following command:

```bash
yarn add react-qif
```

### Basic Setup
After installation, import `FiltersProvider` and other hooks from the library, and wrap your components in the `FiltersProvider` to manage filter states.

---

## Usage

### Overview
The `FiltersProvider` allows you to pass external filter states (`filters`) and their updater (`setFilters`) for efficient filter management. It synchronizes filter states with URL search parameters for a seamless user experience.

### Basic Example
Here’s a simple example of using the `FiltersProvider` with custom filter components:

```tsx
import { FiltersProvider } from 'qif';
import { useState } from 'react';
import FilterComponent from './FilterComponent';
import ResetButton from './ResetButton';

const DataFilter = () => {
  const [filters, setFilters] = useState<Params>({});

  return (
    <FiltersProvider syncSearchParams filters={filters} setFilters={setFilters}>
      <div className='flex flex-col gap-5'>
        <FilterComponent name='test_filter' />
        <FilterComponent name='another_filter' />
        <ResetButton />
      </div>
    </FiltersProvider>
  );
};
```

---

## API Reference

### FiltersProvider

The `FiltersProvider` component takes in filter state and its updater function and provides various methods to manage filters efficiently.

**Props**:
- `filters`: `T` - Filter values managed by your external state.
- `setFilters`: `Dispatch<SetStateAction<T>>` - State updater function for filters.
- `syncSearchParams`: `boolean` - Syncs the filters with URL search parameters if true.
- `onBeforeStateChange`: `(filters: T, reason: keyof T | 'clear') => T` - Callback function before the filter state changes.

### useFilters

The `useFilters` hook provides methods for registering, setting, and resetting filters.

**Methods**:
- `register(name: keyof T, defaultValue: unknown)`: Registers a filter and sets its default value.
- `unregister(name: keyof T)`: Unregisters a filter.
- `setValue(name: keyof T, value: unknown)`: Updates the value of a specific filter.
- `getValue(name: keyof T)`: Retrieves the current value of a filter.
- `reset()`: Resets all filters to their initial values.
- `isResetDisabled()`: Returns true if the reset button should be disabled.

---

## Examples

### FilterComponent Example
Here’s a reusable filter input component using `useFilters` to manage individual filters:

```tsx
import { useFilters } from 'qif';
import { useEffect } from 'react';

export const FilterComponent = ({ name, defaultValue = '' }) => {
  const { register, setValue, getValue } = useFilters();

  useEffect(() => {
    register(name, defaultValue);
  }, [name, register, defaultValue]);

  const handleChange = (e) => setValue(name, e.target.value);

  return (
    <input
      type='text'
      onChange={handleChange}
      placeholder={`Filter: ${name}`}
      value={getValue(name) || defaultValue}
    />
  );
};
```

### ResetButton Example
A button component that resets all filters using the `reset` function from the `useFilters` hook:

```tsx
import { useFilters } from 'qif';

export const ResetButton = () => {
  const { reset, isResetDisabled } = useFilters();

  return (
    <button onClick={reset} disabled={isResetDisabled}>
      Reset Filters
    </button>
  );
};
```

---

## Tutorial

### How to Create Custom Filters
In this section, you will learn how to create custom filter components using the `useFilters` hook from the FiltersProvider package. We'll start by setting up a basic filter and then show you how to manage multiple filters together.

#### Step 1: Set up filter state
First, initialize your filter state using `useState` in your main component.

```typescript
const [filters, setFilters] = useState<Params>({});
```

#### Step 2: Use FiltersProvider
Wrap your components inside the `FiltersProvider`, passing the filter state and its updater.

```tsx
<FiltersProvider syncSearchParams filters={filters} setFilters={setFilters}>...</FiltersProvider>
```

#### Step 3: Create filter components
Create individual filter components using the `useFilters` hook to register and set filter values.

```tsx
const FilterComponent = ({ name, defaultValue }) => {
  const { register, setValue, getValue } = useFilters();
  useEffect(() => register(name, defaultValue), [name, register, defaultValue]);
  const handleChange = (e) => setValue(name, e.target.value);
  return (<input value={getValue(name)} onChange={handleChange} />);
};
```
