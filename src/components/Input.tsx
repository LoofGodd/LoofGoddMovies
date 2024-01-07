import { cva, type VariantProps } from "class-variance-authority";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

const inputStyles = cva(["outline-none"], {
  variants: {
    intent: {
      primary: [
        "border-none  bg-transparent text-center  text-primary placeholder-primary caret-primary",
      ],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});
type InputProps = VariantProps<typeof inputStyles> & {
  type: string;
  className?: string;
  placeholder: string;
  OnChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  intent,
  type,
  className,
  placeholder,
  OnChange,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={twMerge(inputStyles({ intent }), className)}
      onChange={(e) => OnChange(e)}
    />
  );
}
