import { type JSX } from "react";

export function Header({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
