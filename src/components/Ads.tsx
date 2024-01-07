import { twMerge } from "tailwind-merge";

interface Props {
  className?: string;
}

function Ads({ className }: Props) {
  return (
    <div
      className={twMerge(
        "grid h-36 w-full place-items-center bg-primary text-6xl text-dark",
        className,
      )}
    >
      Ad Here
    </div>
  );
}

export default Ads;
