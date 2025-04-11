"use client";

import { SnapPageScroll } from "@/components/snapscroll/SnapScrollContainer";
import { useState } from "react";
import { LandingSection } from "@/components/sections/landing";
import { AboutSection } from "@/components/sections/about";

const TITLES = ["wip", "about", "Contact"];

export default function Home() {
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);

  const onScroll = (pageNum: number, progressNum: number) => {
    setPage(pageNum);
    setProgress(progressNum);
  };

  return (
    <SnapPageScroll onScroll={onScroll} titles={TITLES}>
      <LandingSection toggle={page === 0} p={progress} />
      <AboutSection />
    </SnapPageScroll>
  );
}
