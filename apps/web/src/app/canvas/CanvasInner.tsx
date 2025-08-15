"use client";

import { Canvas } from "@/features/editor/canvas";
import { useChatLoader } from "@/features/editor/hooks/useChatLoader";
import { useSceneLoader } from "@/features/editor/hooks/useSceneLoader";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo } from "react";

export function CanvasPageInner() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const id = useMemo(() => params.get("id"), [params]);

  const { error } = useSceneLoader(id ?? null);
  useChatLoader(id ?? null);

  useEffect(() => {
    if (!id) {
      const newId = crypto.randomUUID();
      router.replace(`${pathname}?id=${newId}`);
      return;
    }
  }, [id, pathname, router]);

  if (!id) return null; // 또는 로딩 컴포넌트

  if (error) {
    alert("error occured, please reload");
    return null;
  }

  return <Canvas />;
}
