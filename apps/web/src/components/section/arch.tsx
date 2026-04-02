import { LandingSectionContainer } from "@/ui/section";
import FlipBookWrapper from "../flipbook/FlipBookWrapper";

export function ArchSection() {
  return (
    <LandingSectionContainer>
      <div
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
        }}
      >
        <h2>arch</h2>
        <FlipBookWrapper totalPages={114} />
      </div>
    </LandingSectionContainer>
  );
}
