"use client";

import FlipBookWrapper from "@/components/flipbook/FlipBookWrapper";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import * as styles from "./book.css";
import Image from "next/image";

const TOTAL_PAGES = 114;

export function ArchPortfolio() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const [page, setPage] = useState(0);

  // URL에 맞춰 페이지 초기화
  useEffect(() => {
    const p = params.get("p");
    const num = p ? parseInt(p) : 0;

    if (isNaN(num) || num < 0 || num >= TOTAL_PAGES) {
      console.warn("Invalid page number, fallback to 0");
      router.replace(`${pathname}?p=0`);
      return;
    }

    setPage(num);
  }, [params, pathname, router]);

  // 페이지 변경 시 URL 업데이트
  const handlePageChange = (newPage: number) => {
    if (newPage < 0 || newPage >= TOTAL_PAGES) return;
    setPage(newPage);
    router.replace(`${pathname}?p=${newPage}`);
  };

  return (
    <div className={styles.bookContainer}>
      {/* <Arrow /> */}
      <FlipBookWrapper
        totalPages={TOTAL_PAGES}
        currentPage={page}
        onPageChange={handlePageChange}
      />
      {/* <Arrow flip={true}/> */}
    </div>
  );
}

function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: flip ? "scaleX(-1)" : "none",
        padding: "4px",
      }}
    >
      <Image
        placeholder="empty"
        src={`/icons/arrowLeft.svg`}
        alt={`arrow left icon`}
        width={16}
        height={16}
      />
    </div>
  );
}
