import { Range } from "@/types/carTypes";

export function useRangeFilters(values: number[]) {
  const min: number = values[0];
  const max: number = values[values.length - 1];
  const isInteger: Boolean = values.every(Number.isInteger);
  const defaultRange: Range = [values[0], values[values.length - 1]];
  return {
    isInteger,
    min,
    max,
    defaultRange,
  };
}
