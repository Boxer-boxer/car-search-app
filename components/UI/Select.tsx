import { CarPropertyValues } from "@/types/carTypes";
import { X } from "lucide-react";

type SelectProps = {
  handleSelect: (e: string) => void;
  value: string;
  options: CarPropertyValues[];
  className: string;
  defaultText?: string;
};

export function Select({
  value,
  handleSelect,
  options,
  className,
  defaultText = "Please choose an option",
}: SelectProps) {
  return (
    <div className="flex">
      <select
        className={`rounded-sm border-2 border-gray-200 p-2 ${className}`}
        value={value}
        onChange={(e) => {
          handleSelect(e.target.value);
        }}
      >
        <option value="">{`--${defaultText}--`}</option>
        {options.map((value) => (
          <option value={value} key={`dd-${value}`}>
            {value}
          </option>
        ))}
      </select>
      {value && (
        <button
          onClick={() => {
            handleSelect("");
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
