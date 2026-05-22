type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`rounded-base block rounded-2xl p-6 shadow-xs transition-shadow hover:shadow-md ${className || ""}`}
    >
      {children}
    </div>
  );
}
