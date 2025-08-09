"use client";

import { themeVars } from "@/styles";
import { useEffect, useMemo, useState } from "react";

const ACCEL = 2;

type PProps = {
  text: string;
  progress: number;
  start?: number; // from 0 to 1
  end?: number; // from 0 to 1
  accel?: number;
};

export function FontMixer({
  text,
  progress,
  accel,
  start = 0,
  end = 1,
}: PProps) {
  const acceleration = accel || ACCEL;

  const [txtStart, setTxtStart] = useState("");
  const [txtEnd, setTxtEnd] = useState(text);
  const scale = useMemo(() => remap(start, end, text.length + 1), []);

  useEffect(() => {
    const mapped = Math.min(Math.max(progress, start), end) - start;
    const ind = Math.floor(mapped * scale);
    const animatedText = text.slice(0, ind);
    const remainingText = text.slice(ind);
    setTxtStart(animatedText);
    setTxtEnd(remainingText);
  }, [progress]);

  return (
    <p
      style={{
        textAlign: "center",
      }}
    >
      <span style={{ fontFamily: themeVars.font.primary }}>{txtStart}</span>
      <span style={{ fontFamily: themeVars.font.tertiary }}>{txtEnd}</span>
    </p>
  );
}

export function ColorMixer({
  text,
  progress,
  accel,
  start = 0,
  end = 1,
}: PProps) {
  const acceleration = accel || ACCEL;

  const [txtStart, setTxtStart] = useState("");
  const [txtEnd, setTxtEnd] = useState(text);
  const scale = useMemo(() => remap(start, end, text.length + 1), []);

  useEffect(() => {
    const mapped = Math.min(Math.max(progress, start), end) - start;
    const ind = Math.floor(mapped * scale);
    const animatedText = text.slice(0, ind);
    const remainingText = text.slice(ind);
    setTxtStart(animatedText);
    setTxtEnd(remainingText);
  }, [progress]);

  return (
    <p
      style={{
        textAlign: "center",
        height: "1rem",
      }}
    >
      <span style={{ color: themeVars.color.secondary }}>{txtStart}</span>
      {/* <span style={{ color: themeVars.color.textPlaceholder }}>{txtEnd}</span> */}
    </p>
  );
}

function remap(start: number, end: number, n: number) {
  // start - end 까지 범위를 0 - target으로 변환
  // console.log("remap");
  return n / (end - start);
}
