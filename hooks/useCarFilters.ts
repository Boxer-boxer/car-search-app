import { useEffect, useState } from "react";
import { useMemo } from "react";

import { Car, FilterModel, CarFilters } from "@/types/carTypes";
import { buildFilterOptions, filterCars } from "@/lib/filters";

export function useCarFilters(carList: Car[]) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filterValue, setFilterValue] = useState<Partial<CarFilters>>({});
  const [displayCars, setDisplayCars] = useState<Car[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterModel | null>(null);

  // TODO: Hardcoding this for now - can be further improved by defining dependencies
  // in the FILTER_UI_CONFIG constants i.e. model: [make]
  const dependentFilterOptions = useMemo(() => {
    if (!filterOptions) return null;

    const make = filterValue.make;

    if (!make) return filterOptions;

    const allowedModels = carList
      .filter((car) => car.make === make)
      .map((car) => car.model);

    return {
      ...filterOptions,
      model: [...new Set(allowedModels)],
    };
  }, [filterOptions, filterValue.make, carList]);

  useEffect(() => {
    setFilterOptions(buildFilterOptions(carList));
  }, [carList]);

  useEffect(() => {
    setDisplayCars(filterCars(carList, filterValue, searchInput));
  }, [carList, filterValue, searchInput]);

  useEffect(() => {
    if (!filterValue.make || !filterValue.model) return;

    const validModels = carList
      .filter((car) => car.make === filterValue.make)
      .map((car) => car.model);

    if (!validModels.includes(filterValue.model as string)) {
      setFilterValue((prev) => ({
        ...prev,
        model: undefined,
      }));
    }
  }, [filterValue.make]);

  return {
    setFilterOptions,
    filterOptions: dependentFilterOptions,
    setSearchInput,
    setFilterValue,
    searchInput,
    displayCars,
  };
}
