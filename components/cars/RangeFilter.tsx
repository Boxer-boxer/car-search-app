// "use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import _ from "lodash";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import { Heading } from "@/components/UI";

type RangeFilterProps = {
  values: number[];
  handleOnChange: (value: [number, number]) => void;
};

export function RangeFilter({ values, handleOnChange }: RangeFilterProps) {
  const [isInteger, setIsInteger] = useState<boolean>(false);
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [selectedRange, setSelectedRange] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    // All filter arrays are sorted, so we can hardcode the first position
    // as the minimum and the last position as the max
    setMin(values[0]);
    setMax(values[values.length - 1]);
    setIsInteger(values.every(Number.isInteger));
    setSelectedRange([values[0], values[values.length - 1]]);
  }, []);

  return (
    <div className="mb-2 flex flex-col">
      <RangeSlider
        className="mb-2"
        // defaultValue={selectedRange}
        value={selectedRange}
        min={min}
        max={max}
        step={isInteger ? 1 : 0.1}
        onInput={(value: [number, number]) => {
          setSelectedRange(value);
          handleOnChange(value);
        }}
      />
      <div className="mb-2 flex flex-wrap justify-items-start">
        <Heading variant="h6" className="text-small mr-2">
          Selected:
        </Heading>
        <div className="mr-2 cursor-pointer rounded-sm border-gray-300 bg-gray-100 p-2 transition">
          Minimum: {selectedRange[0]}
        </div>
        <div className="mr-2 cursor-pointer rounded-sm border-gray-300 bg-gray-100 p-2 transition">
          Maximum: {selectedRange[1]}
        </div>

        {selectedRange[0] != min ||
          (selectedRange[1] != max && (
            <button onClick={(e) => setSelectedRange([min, max])}>
              <X
                color="red"
                className="h-5 w-5 cursor-pointer rounded-sm transition hover:bg-gray-100"
              />
            </button>
          ))}
      </div>
    </div>
  );
}
