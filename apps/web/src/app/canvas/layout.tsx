import { Toolbar } from "@/features/editor/toolbar/components/Toolbar";
import * as styles from "./layout.css";

export default function CanvasLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layoutContainer}>
      <main className={styles.canvasContainer}>{children}</main>
      <Toolbar />
    </div>
  );
}
