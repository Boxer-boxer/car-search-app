import { CSSProperties } from "react";

type ButtonProps = {
  handleClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  variant?: "regular" | "borderless";
  className?: string;
  style?: CSSProperties;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({
  variant = "regular",
  handleClick,
  className,
  children,
  style,
  onMouseEnter,
  onMouseLeave,
}: ButtonProps) {
  return (
    <button
      style={style}
      className={`${
        variant === "regular"
          ? `cursor-pointer rounded-lg border border-gray-300 bg-white p-2 text-sm text-gray-900 hover:shadow focus:border-gray-600 focus:outline-none`
          : "cursor-pointer border-0 bg-none shadow-none outline-0"
      } ${className}`}
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children && children}
    </button>
  );
}
