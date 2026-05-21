type FilterOptions = Record<string, unknown[]>;

// Builds an object based on an array of items with multiple properties.
// These properties can be
export function buildFilterOptions<T extends Record<string, unknown>>(
  items: T[],
//   excludeKeys: (keyof T)[] = [],
): FilterOptions {
  const filters: Record<string, Set<unknown>> = {};

  for (const item of items) {
    for (const key in item) {
    //   if (excludeKeys.includes(key)) {
    //     continue;
    //   }

      if (!filters[key]) {
        filters[key] = new Set();
      }

      filters[key].add({item[key]);
    }
  }

  return Object.fromEntries(
    Object.entries(filters).map(([key, values]) => [
      key,
      Array.from(values).sort(),
    ]),
  );
}
