import { Range } from "@/types/carTypes";
import { useEffect, useState } from "react";

export function useRangeFilters(
  values: number[],
  handleOnChange: (value: Range) => void,
) {
  const [selectedRange, setSelectedRange] = useState<Range>([0, 0]);
  const min = values[0];
  const max = values[values.length - 1];
  const isInteger = values.every(Number.isInteger);

  useEffect(() => {
    // All filter arrays are sorted, so we can hardcode the first position
    // as the minimum and the last position as the max
    setSelectedRange([values[0], values[values.length - 1]]);
  }, []);

  const setRange = (value: Range) => {
    setSelectedRange(value);
    handleOnChange(value);
  };

  return {
    isInteger,
    min,
    max,
    selectedRange,
    setRange,
  };
}
