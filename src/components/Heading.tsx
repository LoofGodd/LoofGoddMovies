import { cva, type VariantProps } from "class-variance-authority";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const headingStyles = cva(
  ["tracking-wider text-white hover:text-primary transition-all duration-300"],
  {
    variants: {
      size: {
        xl: ["font-extrabold text-4xl uppercase"],
        lg: ["font-extrabold text-2xl uppercase"],
        md: ["font-bold text-xl uppercase"],
        sm: ["font-semibold text-lg capitalize"],
        xs: ["font-semibold text-sm capitalize"],
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type headingProps = VariantProps<typeof headingStyles> & {
  title: string;
  className?: string;
  href: string;
};

function Heading({ title, size, href, className }: headingProps) {
  return (
    <Link to={href} className={twMerge(headingStyles({ size }), className)}>
      {title}
    </Link>
  );
}

export default Heading;
