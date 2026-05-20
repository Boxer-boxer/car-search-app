type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`bg-neutral-primary-soft border-default rounded-base block rounded-2xl border p-6 shadow-xs transition-shadow hover:shadow-md ${className || ""}`}
    >
      {children}
    </div>
  );
}
