"use client";

import React, { useMemo } from "react";
import HTMLFlipBook from "react-pageflip";
import { BookPage } from "./FlipBookPage";

import * as styles from "./flip.css";

interface FlipBookProps {
  currentPage?: number;
  totalPages: number;
  onPageChange?: (page: number) => void; // 페이지 변경 핸들러
}

export default function FlipBook({
  totalPages,
  currentPage = 0,
  onPageChange,
}: FlipBookProps) {
  const pages = useMemo(
    () =>
      Array.from(
        { length: totalPages },
        (_, i) => `/pf/portfolio_${i + 1}.png`,
      ),
    [totalPages],
  );

  return (
    <div className={styles.bookWrapper}>
      {/* @ts-ignore */}
      <HTMLFlipBook
        width={794}
        height={1123}
        minWidth={300}
        // maxWidth={794}
        // minHeight={400}
        maxHeight={1123}
        showCover={true}
        size="stretch"
        drawShadow={true}
        usePortrait={true}
        mobileScrollSupport={true}
        startPage={currentPage}
        style={{
          margin: "0 auto",
          height: "max-content",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
        maxShadowOpacity={0.3}
        className="demo-book"
        flippingTime={600}
        showPageCorners={true}
        onFlip={(e) => {
          onPageChange && onPageChange(Number(e.data));
        }}
      >
        {pages.map((page, index) => (
          <BookPage
            key={index}
            data-density="soft"
            pageNumber={index + 1}
            imgSrc={page}
            priority={Math.abs(index - currentPage) < 5}
          />
        ))}
      </HTMLFlipBook>
    </div>
  );
}
