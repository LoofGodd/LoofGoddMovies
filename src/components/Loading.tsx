import { cva, type VariantProps } from "class-variance-authority";

const styles = cva([" bg-primary text-dark grid place-items-center"], {
  variants: {
    screen: {
      screen: ["z-[90] fixed h-screen  w-screen text-8xl animate-bounce"],
      full: ["w-full h-full text-4xl "],
    },
  },
  defaultVariants: {
    screen: "screen",
  },
});

type LoadingProps = VariantProps<typeof styles>;

function Loading({ screen }: LoadingProps) {
  return (
    <div className={styles({ screen })}>
      <p>Wait Bro...</p>
    </div>
  );
}

export default Loading;
