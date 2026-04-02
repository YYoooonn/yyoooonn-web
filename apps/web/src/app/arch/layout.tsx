import * as styles from "./layout.css";

export default function PFLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layoutContainer}>
      <main className={styles.mainContainer}>{children}</main>
    </div>
  );
}
