"use client";

import { LandingSectionContainer } from "@/ui/section";
import { themeVars } from "@/styles";
import Link from "next/link";
import { useState, useEffect } from "react";

import * as styles from "./about.css";
import { navigate } from "@/lib/navigate";

type SProps = {
  toggle?: boolean;
  p?: number;
};

export function AboutSection({ toggle, p }: SProps) {
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
      <div className={styles.aboutContainer}>
        <h2 style={{ width: "100%" }}> about </h2>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TagContainer>
            <TagBlock tag="email" />
            <TagBlock tag="github" />
            <TagBlock tag="blog" />
          </TagContainer>
          <LinkContainer>
            <TextBlock text="jonguk527@gmail.com" />
            <LinkBlock link="https://github.com/YYoooonn" />
            <LinkBlock link="https://velog.io/@yyoooonn" />
          </LinkContainer>
        </div>
      </div>
    </LandingSectionContainer>
  );
}

function TagContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        textAlign: "left",
        color: themeVars.color.secondary,
        paddingRight: "20px",
        ...themeVars.textStyle.small,
      }}
    >
      {children}
    </div>
  );
}

function TagBlock({ tag }: { tag: string }) {
  return <p style={{ padding: themeVars.spacing.xsmall }}>{tag}</p>;
}

function LinkContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        color: themeVars.color.textPlaceholderDark,
        ...themeVars.textStyle.small,
      }}
    >
      {children}
    </div>
  );
}

function LinkBlock({ link, tag }: { link: string; tag?: string }) {
  return (
    <p style={{ padding: themeVars.spacing.xsmall }}>
      <Link href={link} style={{ color: themeVars.color.textPlaceholderDark }}>
        {tag ? tag : link}
      </Link>
    </p>
  );
}

function TextBlock({ text }: { text: string }) {
  return (
    <div style={{ padding: themeVars.spacing.xsmall }}>
      <div style={{ color: themeVars.color.textPlaceholderDark }}>{text}</div>
    </div>
  );
}
