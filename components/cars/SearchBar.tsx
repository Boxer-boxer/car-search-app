"use client";

import { TextInput } from "@/components/UI";

import { X } from "lucide-react";

type SearchBarProps = {
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClearClick?: () => void;
};

export function SearchBar({
  className,
  onChange,
  onClearClick,
  value,
}: SearchBarProps) {
  return (
    <TextInput
      value={value}
      className={className}
      onChange={onChange}
      {...(onClearClick && { endAdornment: <X /> })}
      {...(onClearClick && { endAdornmentClick: () => onClearClick() })}
    />
  );
}
