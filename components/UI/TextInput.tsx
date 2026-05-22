import { InputHTMLAttributes, forwardRef } from "react";
import { Button } from "@/components/UI";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  endAdornment?: React.ReactNode;
  endAdornmentClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, endAdornment, endAdornmentClick, ...props }, ref) => {
    return (
      <div
        className={`flex rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 ${className}`}
      >
        <input ref={ref} {...props} className="w-full border-0 outline-0" />
        {endAdornment && endAdornmentClick && (
          <Button
            variant="borderless"
            handleClick={(e) => endAdornmentClick(e)}
          >
            {endAdornment}
          </Button>
        )}
      </div>
    );
  },
);
