import { X } from "lucide-react";
import { useState } from "react";
import _ from "lodash";

import { Heading, Button } from "@/components/UI";
import { CarPropertyValues, FilterValue } from "@/types/carTypes";

type IconFilterProps = {
  value: string[];
  options?: string[];
  handleOnChange: (e: FilterValue) => void;
};

export function IconFilter({
  value = [],
  options,
  handleOnChange,
}: IconFilterProps) {
  const [isSelectedFilterHovered, setIsSelectedFilterHovered] =
    useState<CarPropertyValues | null>(null);

  return (
    <div className="mb-2 flex flex-col">
      <div className="mb-2 flex flex-wrap justify-items-start gap-2">
        {value && options?.length === value.length ? (
          <p className="text-small font-light">-- All options selected -- </p>
        ) : (
          Array.isArray(options) &&
          options?.map((colour, index) => {
            return (
              !value.includes(colour) && (
                <Button
                  key={`cb-${colour}-${index}`}
                  className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-lg border border-gray-600 hover:bg-gray-100"
                  handleClick={() => {
                    value?.includes(colour)
                      ? handleOnChange(_.without(value, colour))
                      : handleOnChange([...value, colour]);
                  }}
                  style={{
                    background: colour,
                  }}
                />
              )
            );
          })
        )}
      </div>
      {value.length > 0 && (
        <div className="mb-2 flex flex-wrap justify-items-start gap-2">
          <Heading variant="h6" className="text-small mr-2">
            Selected:
          </Heading>
          {value.map((colour) => (
            <Button
              key={`selected-value-${colour}`}
              className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-lg border border-gray-600 p-0 hover:bg-gray-100"
              style={{
                background: colour,
              }}
              handleClick={() => {
                handleOnChange(_.without(value, colour));
              }}
              onMouseEnter={() => setIsSelectedFilterHovered(colour)}
              onMouseLeave={() => setIsSelectedFilterHovered(null)}
            >
              {isSelectedFilterHovered === colour && (
                <X
                  color="red"
                  key={`value-x-${colour}`}
                  className="h-5 w-5 cursor-pointer"
                />
              )}
            </Button>
          ))}
          <Button variant="borderless" handleClick={(e) => handleOnChange([])}>
            <X
              color="red"
              className="h-5 w-5 cursor-pointer rounded-sm transition hover:bg-gray-100"
            />
          </Button>
        </div>
      )}
    </div>
  );
}
