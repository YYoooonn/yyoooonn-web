import { type JSX } from "react";

export function Footer({
  className,
  title,
  children,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
