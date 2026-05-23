// "use client";
import { X } from "lucide-react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import { useRangeFilters } from "@/hooks/useRangeFilters";
import { Heading } from "@/components/UI";
import { Range } from "@/types/carTypes";

type RangeFilterProps = {
  value?: Range;
  values: number[];
  handleOnChange: (value: Range) => void;
};

export function RangeFilter({
  values,
  value,
  handleOnChange,
}: RangeFilterProps) {
  const { isInteger, min, max, defaultRange } = useRangeFilters(values);
  const valueToUse = value ?? defaultRange;
  return (
    <div className="mb-2 flex flex-col">
      <RangeSlider
        className="mb-2"
        value={valueToUse}
        min={min}
        max={max}
        step={isInteger ? 1 : 0.1}
        onInput={(value: Range) => {
          handleOnChange(value);
        }}
      />
      <div className="mb-2 flex flex-wrap justify-items-start">
        <Heading variant="h6" className="text-small mr-2">
          Selected:
        </Heading>
        <div className="mr-2 cursor-pointer rounded-sm border-gray-300 bg-gray-100 p-2 transition">
          Minimum: {valueToUse[0]}
        </div>
        <div className="mr-2 cursor-pointer rounded-sm border-gray-300 bg-gray-100 p-2 transition">
          Maximum: {valueToUse[1]}
        </div>

        {(valueToUse[0] > min || valueToUse[1] < max) && (
          <button onClick={(e) => handleOnChange([min, max])}>
            <X
              color="red"
              className="h-5 w-5 cursor-pointer rounded-sm transition hover:bg-gray-100"
            />
          </button>
        )}
      </div>
    </div>
  );
}
