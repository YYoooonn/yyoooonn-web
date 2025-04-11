"use client";

import { themeVars } from "@repo/ui/styles";
import { ColorMixer, FontMixer } from "@repo/ui/components";
import { LandingSectionContainer } from "@repo/ui/components";
import { useEffect, useState } from "react";

type SProps = {
  toggle?: boolean;
  p?: number;
};

export function LandingSection({ toggle, p }: SProps) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (toggle && p) {
      setProgress(p);
    } else {
      setProgress(0);
    }
  }, [p, toggle]);

  return (
    <LandingSectionContainer>
      <h1
        style={{
          textAlign: "center",
          color: themeVars.color.text,
          ...themeVars.textStyle.xlarge,
        }}
      >
        <FontMixer text={"yyoooonn"} progress={progress} end={0.5} />
      </h1>

      <div
        style={{
          ...themeVars.textStyle.medium,
        }}
      >
        <ColorMixer text="work in progress" progress={progress} end={0.8} />
      </div>
    </LandingSectionContainer>
  );
}
