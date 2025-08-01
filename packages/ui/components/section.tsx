import { PropsWithChildren } from "react";
import { sectionStyle } from "./style/section.css";

export function LandingSectionContainer({ children }: PropsWithChildren) {
  return <section className={sectionStyle}>{children}</section>;
}
