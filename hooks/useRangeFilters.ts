import { Range } from "@/types/carTypes";
import { useEffect, useState } from "react";

export function useCarFilters(
  values: number[],
  handleOnChange: (value: Range) => void,
) {
  const [isInteger, setIsInteger] = useState<boolean>(false);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [selectedRange, setSelectedRange] = useState<Range>([0, 0]);

  useEffect(() => {
    // All filter arrays are sorted, so we can hardcode the first position
    // as the minimum and the last position as the max
    setMin(values[0]);
    setMax(values[values.length - 1]);
    setIsInteger(values.every(Number.isInteger));
    setSelectedRange([values[0], values[values.length - 1]]);
  }, []);

  useEffect(() => {
    handleOnChange(selectedRange);
  }, [selectedRange]);

  return {
    isInteger,
    min,
    max,
    selectedRange,
    setSelectedRange,
  };
}
