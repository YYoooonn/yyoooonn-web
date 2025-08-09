"use client";

import { Canvas } from "@/features/editor/canvas";
import { useChatLoader } from "@/features/editor/hooks/useChatLoader";
import { useSceneLoader } from "@/features/editor/hooks/useSceneLoader";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CanvasPage() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const id = params.get("id");

  const [isReady, setIsReady] = useState(false);

  const { loading, error } = useSceneLoader(id);
  useChatLoader(id);

  useEffect(() => {
    if (!id) {
      const newId = crypto.randomUUID();
      router.replace(`${pathname}?id=${newId}`);
    } else {
      setIsReady(true);
    }
  }, [id, pathname, router]);

  if (!isReady) {
    return null; // 또는 로딩 컴포넌트 표시
  }

  if (error) {
    alert(error);
    return <div>{error.msg}</div>;
  }

  return <Canvas></Canvas>;
}
