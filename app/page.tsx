"use client";

import { useEffect, useState } from "react";
import { ListFilter } from "lucide-react";

import { Car, FilterModel, CarFilters } from "@/types/carTypes";
import { CarCard, SearchBar, FilterMenu } from "@/components/cars";
import { Button, Heading } from "@/components/UI";
import { buildFilterOptions, filterCars } from "@/lib/filters";

export default function Home() {
  const [carList, setCarList] = useState<Car[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [filterOptions, setFilterOptions] = useState<FilterModel | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [filterValue, setFilterValue] = useState<Partial<CarFilters>>({});
  const [displayCars, setDisplayCars] = useState<Car[]>([]);

  useEffect(() => {
    fetch("/data/cars.json")
      .then((response) => response.json())
      .then((data) => setCarList(data));
  }, []);

  useEffect(() => {
    setFilterOptions(buildFilterOptions(carList));
    setDisplayCars(carList);
  }, [carList]);

  useEffect(() => {
    setDisplayCars(filterCars(carList, filterValue, searchInput));
  }, [carList, filterValue, searchInput]);

  return (
    <div className="bg-gray-50 pt-4">
      <div className="container mx-auto flex min-h-dvh flex-col">
        <div className="mb-2 flex justify-start">
          <SearchBar
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            {...(searchInput && { onClearClick: () => setSearchInput("") })}
            className="mr-2 w-full"
          />
          <Button handleClick={() => setShowFilters(!showFilters)}>
            <ListFilter />
          </Button>
        </div>
        {filterOptions && (
          <FilterMenu
            className={`${showFilters ? "flex opacity-100" : "hidden opacity-0"} mb-2 transition-all transition-discrete duration-500`}
            filterOptions={filterOptions}
            filterUIConfig={{
              colour: "icon",
              year: "range",
              engine_size: "range",
              seats: "range",
              top_speed: "range",
              horsepower: "range",
            }}
            handleChange={(filterValue) => setFilterValue(filterValue)}
          />
        )}
        {displayCars.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {displayCars.map((car, index) => (
              <CarCard
                car={car}
                key={`${car.make}-${car.model}-${car.year}-${index}`}
              />
            ))}
          </div>
        ) : (
          <div className="flex w-full justify-center text-center">
            <Heading variant="h6">
              No cars found. Please readjust your filters or try again later
            </Heading>
          </div>
        )}
      </div>
    </div>
  );
}
