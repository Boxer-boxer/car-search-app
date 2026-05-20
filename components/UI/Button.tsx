type ButtonProps = {
  children: React.ReactNode;
  variant?: "regular" | "borderless";
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export function Button({
  variant = "regular",
  handleClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={
        variant === "regular"
          ? `mb-2 cursor-pointer rounded-lg border border-gray-300 bg-white p-2 text-sm text-gray-900 hover:shadow focus:border-black focus:outline-none`
          : "cursor-pointer border-0 bg-none shadow-none outline-0"
      }
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
