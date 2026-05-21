"use client";

import { useEffect, useState } from "react";
import { ListFilter } from "lucide-react";

import { Car } from "@/types/carType";
import { CarCard, SearchBar, FilterMenu } from "@/components/cars";
import { Button } from "@/components/UI";
import { buildFilterOptions } from "@/lib/filters";

export default function Home() {
  const [carList, setCarList] = useState<Car[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    fetch("/data/cars.json")
      .then((response) => response.json())
      .then((data) => setCarList(data));
  }, []);

  useEffect(() => {
    console.log(buildFilterOptions(carList));
  }, [carList]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("clicked");
  };

  return (
    <div className="flex flex-1 flex-col bg-zinc-50 p-2 font-sans">
      <div className="flex justify-start">
        <SearchBar
          onChange={(e) => setSearchInput(e.target.value)}
          onSearchClick={(e) => handleClick(e)}
          className="mr-2 mb-2 w-2xl"
        />
        <Button handleClick={handleClick}>
          <ListFilter />
        </Button>
      </div>
      <div className="mb-2 flex justify-start">
        <FilterMenu />
      </div>
      <div className="flex flex-wrap items-stretch justify-start">
        {carList?.map((car, index) => (
          <CarCard
            car={car}
            key={`${car.make}-${car.model}-${car.year}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
