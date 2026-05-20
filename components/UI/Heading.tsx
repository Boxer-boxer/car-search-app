type HeadingLevels = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  variant?: HeadingLevels;
  children: React.ReactNode;
  className?: string;
};

const styles: Record<HeadingLevels, string> = {
  h1: "text-4xl font-bold tracking-tight",
  h2: "text-3xl font-semibold tracking-tight",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-md front-medium",
};

export function Heading({ variant = "h1", children, className }: HeadingProps) {
  const Component = variant;
  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
}
