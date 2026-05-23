import _ from "lodash";

import { Select } from "@/components/UI";
import { CarPropertyValues } from "@/types/carTypes";

type SelectFilterProps = {
  value: string;
  options: CarPropertyValues[];
  handleOnChange: (e: string) => void;
};

export function SelectFilter({
  options,
  handleOnChange,
  value,
}: SelectFilterProps) {
  return (
    <div className="mb-2 flex flex-row">
      <Select
        className="mr-2 w-full"
        handleSelect={(value) => handleOnChange(value)}
        value={value}
        options={options}
      />
    </div>
  );
}
