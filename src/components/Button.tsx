import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { flexCenter } from "./utils/utile";

const buttonStyles = cva(["transition-all duration-300"], {
  variants: {
    intent: {
      primary: ["bg-primary text-dark border border-primary"],
      secondary: ["bg-slate-700 text-gray-200"],
    },
    size: {
      xl: [""],
      lg: ["p-1  sm:px-2 sm:py-1 font-bold md:px-3 md:py-2  lg:px-5 lg:py-4"],
      md: ["p-1 lg:px-3 font-light"],
      sm: ["text-sm px-3 font-light"],
      xs: ["text-xs px-1"],
      eq: [""],
    },

    background: {
      none: ["bg-transparent border-none"],
      outline: ["bg-transparent border"],
    },
    flex: {
      center: [`${flexCenter}`],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "lg",
  },
});
type ButtonProps = VariantProps<typeof buttonStyles> & {
  children: ReactNode;
  className?: string;
  type?: string;
};
function Button({
  background,
  flex,
  intent,
  size,
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        buttonStyles({ intent, size, flex, background }),
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
