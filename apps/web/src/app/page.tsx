"use client";

import { SnapPageScroll } from "@/components/ui/snapscroll";
import { LandingSection } from "@/components/section/landing";
import { AboutSection } from "@/components/section/about";
import { useState } from "react";

const TITLES = ["wip", "about", "contact"];

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
