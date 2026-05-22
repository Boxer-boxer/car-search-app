import { Car } from "@/types/carTypes";
import { useEffect, useState } from "react";

export function useCarData() {
  const [carList, setCarList] = useState<Car[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("/data/cars.json")
      .then((response) => response.json())
      .then((data) => setCarList(data));
  }, []);

  useEffect(() => {
    carList.length > 0 ? setLoading(false) : setLoading(true);
  }, [carList]);

  return {
    carList,
    loading,
  };
}
