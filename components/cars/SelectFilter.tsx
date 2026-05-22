import { useState } from "react";
import { X } from "lucide-react";
import _ from "lodash";

type SelectFilterProps = {
  values: (string | number)[];
  handleOnChange: (e: string) => void;
};

export function SelectFilter({ values, handleOnChange }: SelectFilterProps) {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="mb-2 flex flex-row">
      {/* TODO: create UI component for Select */}
      <select
        className="mr-2 w-full rounded-sm border-2 border-gray-200 p-2"
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
          handleOnChange(e.target.value);
        }}
      >
        <option value="">--Please choose an option--</option>
        {values.map((value) => (
          <option value={value} key={`dd-${value}`}>
            {value}
          </option>
        ))}
      </select>
      {selected.length > 0 && (
        <button
          onClick={() => {
            setSelected("");
            handleOnChange("");
          }}
        >
          <X
            color="red"
            className="h-5 w-5 cursor-pointer rounded-sm transition hover:bg-gray-100"
          />
        </button>
      )}
    </div>
  );
}
