import { CarPropertyValues } from "@/types/carTypes";

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
  );
}
