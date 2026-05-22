import { useEffect, useState } from "react";
import _ from "lodash";

import { Select } from "@/components/UI";
import { CarPropertyValues } from "@/types/carTypes";

type SelectFilterProps = {
  values: CarPropertyValues[];
  handleOnChange: (e: string) => void;
};

export function SelectFilter({ values, handleOnChange }: SelectFilterProps) {
  const [selected, setSelected] = useState<string>("");

  useEffect(() => {
    handleOnChange(selected);
  }, [selected]);
  return (
    <div className="mb-2 flex flex-row">
      <Select
        className="mr-2 w-full"
        handleSelect={(value) => setSelected(value)}
        value={selected}
        options={values}
      />
    </div>
  );
}
