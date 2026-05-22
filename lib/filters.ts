import { Car, FilterModel, FilterModelInput } from "@/types/carTypes";

/* Builds an object based on an array of items with multiple properties.
/ Returns an object with all available filter categories and necessary
/ data to build the filter UI. Devs can control how many of these properties
/ to display in the UI using the excludeKeys arg. (i.e. normally properties
/ like ID, vin numbers, etc. wouldn't be displayed in the filter menu)
*/
export function buildFilterOptions(items: Partial<Car[]>): FilterModel {
  const filters: Partial<FilterModelInput> = {};

  for (const item of items as Car[]) {
    for (const key in item) {
      const typedKey = key as keyof Car;

      if (!filters[typedKey]) {
        filters[typedKey] = new Set();
      }

      filters[typedKey].add(item[typedKey]);
    }
  }

  return Object.fromEntries(
    Object.entries(filters).map(([key, values]) => [
      key,
      Array.from(values as Set<string | number>).sort(),
    ]),
  );
}

/* filterCars takes an object with filtering values and returns an array of objects
 * that match those values.
 * For example, the object:
 * {
 *   year: [1990, 2000],
 *   make: "Honda"
 * }
 * will return an array containing cars with the make Honda from 1990 to 2000.
 *
 * Ranges are represented as tuples
 * [min, max]
 */

export function filterCars(
  cars: Car[],
  filters: Record<string, (number | string)[] | string>,
  searchInput: string,
) {
  return cars.filter((car) => {
    if (searchInput.trim()) {
      const carSearchText = Object.values(car).join(" ").toLowerCase();
      if (!carSearchText.includes(searchInput.toLowerCase())) {
        return false;
      }
    }

    for (const [key, filterValue] of Object.entries(filters)) {
      if (filterValue == null || filterValue === "") {
        continue;
      }

      const carValue = car[key as keyof Car];

      // Array Filters
      if (Array.isArray(filterValue)) {
        // Check the function is working with Range filters ([min, max])
        // not string filters (i.e. [colour1, colour2, etc.])
        if (
          !filterValue.some((value: string | number) => isNaN(Number(value)))
        ) {
          const [min, max] = filterValue;

          if (carValue < min || carValue > max) {
            return false;
          }

          continue;
        } else {
          if (filterValue.includes(carValue)) {
            continue;
          }
        }
      }

      // String Filter (i.e. dropdowns)
      if (typeof carValue === "string" && typeof filterValue === "string") {
        if (!carValue.toLowerCase().includes(filterValue.toLowerCase())) {
          return false;
        }

        continue;
      }

      // Fallback
      if (carValue !== filterValue) {
        return false;
      }
    }

    return true;
  });
}
