import { Suspense } from "react";
import { CanvasPageInner } from "./CanvasInner";

export default function CanvasPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CanvasPageInner />
    </Suspense>
  );
}
