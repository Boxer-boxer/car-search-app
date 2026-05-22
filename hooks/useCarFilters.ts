import { Car, FilterModel, CarFilters } from "@/types/carTypes";
import { useEffect, useState } from "react";
import { buildFilterOptions, filterCars } from "@/lib/filters";

export function useCarFilters(carList: Car[]) {
  const [searchInput, setSearchInput] = useState<string>("");
  const [filterValue, setFilterValue] = useState<Partial<CarFilters>>({});
  const [displayCars, setDisplayCars] = useState<Car[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterModel | null>(null);

  useEffect(() => {
    setFilterOptions(buildFilterOptions(carList));
  }, [carList]);

  useEffect(() => {
    setDisplayCars(filterCars(carList, filterValue, searchInput));
  }, [carList, filterValue, searchInput]);

  return {
    setFilterOptions,
    filterOptions,
    setSearchInput,
    setFilterValue,
    searchInput,
    displayCars,
  };
}
