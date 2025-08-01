"use client";

import { LandingSectionContainer } from "@/ui/section";
import { themeVars } from "@/styles";
import Link from "next/link";
import { useState, useEffect } from "react";

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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            width: "100%",
            textAlign: "left",
            color: themeVars.color.text,
            ...themeVars.textStyle.xlarge,
          }}
        >
          about
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TagContainer>
            <TagBlock tag="github" />
            <TagBlock tag="blog" />
            <TagBlock tag="arch" />
          </TagContainer>
          <LinkContainer>
            <LinkBlock link="https://github.com/YYoooonn" />
            <LinkBlock link="https://velog.io/@yyoooonn" />
            <LinkBlock
              link="https://issuu.com/yoonjonguk/docs/yyoooonn_wip?fr=sMGJjNjgzMzU5NDM"
              tag="https://issuu.com/yoonjonguk"
            />
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
        ...themeVars.textStyle.medium,
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
        ...themeVars.textStyle.medium,
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
