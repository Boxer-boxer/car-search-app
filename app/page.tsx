"use client";

import { useState } from "react";
import { ListFilter, Loader } from "lucide-react";

import { CarCard, SearchBar, FilterMenu } from "@/components/cars";
import { Button, Heading, Pagination } from "@/components/UI";
import { useCarFilters } from "@/hooks/useCarFilters";
import { useCarData } from "@/hooks/useCarData";
import { FILTER_UI_CONFIG, PAGE_SIZE } from "@/lib/constants";

export default function Home() {
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { carList, loading } = useCarData();

  const {
    setSearchInput,
    searchInput,
    setFilterValue,
    filterValue,
    filterOptions,
    displayCars,
  } = useCarFilters(carList);

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
            filterUIConfig={FILTER_UI_CONFIG}
            filterValues={filterValue}
            handleChange={(filterValue) => setFilterValue(filterValue)}
          />
        )}
        {loading ? (
          <div className="align-items-center flex w-full justify-center p-2">
            <Loader className="animate-spin" />
          </div>
        ) : displayCars.length > 0 ? (
          <>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              {displayCars
                .slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE)
                .map((car, index) => (
                  <CarCard
                    car={car}
                    key={`${car.make}-${car.model}-${car.year}-${index}`}
                  />
                ))}
            </div>
            <div className="flex w-full justify-center py-4">
              <Pagination
                itemsPerPages={PAGE_SIZE}
                itemsTotal={displayCars.length}
                currentPage={currentPage}
                setCurrentPage={(page) => setCurrentPage(page)}
              />
            </div>
          </>
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
