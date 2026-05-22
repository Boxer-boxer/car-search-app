import { X } from "lucide-react";
import { useState } from "react";
import _ from "lodash";

import { Heading, Button } from "@/components/UI";

type IconFilterProps = {
  values: (string | number)[];
  handleOnChange: (e: (string | number)[]) => void;
};

export function IconFilter({ values, handleOnChange }: IconFilterProps) {
  const [selected, setSelected] = useState<(string | number)[]>([]);
  const [isSelectedFilterHovered, setIsSelectedFilterHovered] = useState<
    string | number | null
  >(null);

  const onChange = (arr: (string | number)[]) => {
    setSelected(arr);
    handleOnChange(arr);
  };

  return (
    <div className="mb-2 flex flex-col">
      <div className="mb-2 flex flex-wrap justify-items-start gap-2">
        {values.length === selected.length ? (
          <p className="text-small font-light">-- All values selected -- </p>
        ) : (
          values.map(
            (value, index) =>
              !selected.includes(value) && (
                <Button
                  key={`cb-${value}-${index}`}
                  className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-lg border border-gray-600 hover:bg-gray-100"
                  handleClick={(e) => {
                    selected.includes(value)
                      ? onChange(_.without(selected, value))
                      : onChange([...selected, value]);
                  }}
                  style={{
                    background: value,
                  }}
                />
              ),
          )
        )}
      </div>
      {selected.length > 0 && (
        <div className="mb-2 flex flex-wrap justify-items-start gap-2">
          <Heading variant="h6" className="text-small mr-2">
            Selected:
          </Heading>
          {selected.map((value) => (
            <Button
              key={`selected-value-${value}`}
              className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-lg border border-gray-600 hover:bg-gray-100"
              style={{
                background: value,
              }}
              handleClick={(e) => {
                onChange(_.without(selected, value));
              }}
              onMouseEnter={() => setIsSelectedFilterHovered(value)}
              onMouseLeave={() => setIsSelectedFilterHovered(null)}
            >
              {isSelectedFilterHovered === value && (
                <X
                  color="red"
                  key={`selected-x-${value}`}
                  className="h-5 w-5 cursor-pointer"
                />
              )}
            </Button>
          ))}
          <Button variant="borderless" handleClick={(e) => onChange([])}>
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
