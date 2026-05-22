import { CSSProperties } from "react";

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  variant?: "regular" | "borderless";
  className?: string;
  style?: CSSProperties;
  highlight?: boolean;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export function Button({
  variant = "regular",
  handleClick,
  className,
  children,
  style,
  onMouseEnter,
  onMouseLeave,
  highlight,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      style={style}
      className={`${
        variant === "regular"
          ? `rounded-lg border border-gray-300 p-2 text-sm text-gray-900 hover:shadow focus:border-gray-600 focus:outline-none`
          : "border-0 bg-none shadow-none outline-0"
      } ${highlight ? "bg-gray-400" : ""} ${disabled ? "" : "cursor-pointer"} ${className}`}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
    >
      {children && children}
    </button>
  );
}
