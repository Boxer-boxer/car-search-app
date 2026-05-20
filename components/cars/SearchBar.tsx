"use client";

import { TextInput } from "@/components/UI";

import { Search } from "lucide-react";

type SearchBarProps = {
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function SearchBar({
  className,
  onChange,
  onSearchClick,
}: SearchBarProps) {
  return (
    <TextInput
      className={className}
      onChange={onChange}
      endAdornment={<Search />}
      endAdornmentClick={(e) => onSearchClick(e)}
    />
  );
}
