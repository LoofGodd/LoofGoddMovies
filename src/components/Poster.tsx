import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { backgroundImage } from "../utiles/backgroundImage";
import { Link } from "react-router-dom";

const PosterStyles = cva(
  [
    "w-full block  h-full z-10 duration-300 !bg-cover !bg-center !bg-no-repeat border-none",
  ],
  {
    variants: {
      intent: {
        trending: [
          "hover:shadow-movieTrendingHover rounded-3xl border transition-shadow shadow-movieTrending ",
        ],
        poster: ["hover:shadow-poster rounded-md"],
      },
    },
    defaultVariants: {
      intent: "trending",
    },
  },
);
type PosterProps = VariantProps<typeof PosterStyles> & {
  className?: string;
  backgroundImagePath: string;
  href: string;
};

function Poster({ intent, className, href, backgroundImagePath }: PosterProps) {
  return (
    <Link
      to={href}
      style={{ background: backgroundImage(backgroundImagePath) }}
      className={twMerge(PosterStyles({ intent }), className)}
    />
  );
}

export default Poster;
