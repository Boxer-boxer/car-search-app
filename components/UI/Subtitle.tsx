type SubtitleProps = {
  children: React.ReactNode;
  className?: string;
};

export function Subtitle({ children, className }: SubtitleProps) {
  return (
    <p className={`max-w-2xl text-base text-gray-600 sm:text-lg ${className}`}>
      {children}
    </p>
  );
}
