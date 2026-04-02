"use client";

import { SnapPageScroll } from "@/ui/snapscroll";
import { LandingSection } from "@/components/section/landing";
import { AboutSection } from "@/components/section/about";
import { useState } from "react";
import { ProjectSection } from "@/components/section/project";
// import { ArchSection } from "@/components/section/arch";

const TITLES = ["wip", "about"];

export default function Home() {
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);

  const onScroll = (pageNum: number, progressNum: number) => {
    setPage(pageNum);
    setProgress(progressNum);
  };

  return (
    <SnapPageScroll onScroll={onScroll} titles={TITLES}>
      {page === 0 && <LandingSection toggle={page === 0} p={progress} />}
      {/* {page === 1 && <ProjectSection />} */}
      {page === 1 && <AboutSection />}
      {/* {page === 3 && <ArchSection />} */}
    </SnapPageScroll>
  );
}
