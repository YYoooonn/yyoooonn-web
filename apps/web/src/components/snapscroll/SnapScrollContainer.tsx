"use client";

import { FC, PropsWithChildren, ReactNode, useRef, useState } from "react";
import { animated, SpringValue, useScroll, useSpring } from "@react-spring/web";
import * as styles from "./snap.css";
import { Indicator } from "./Indicator";

type PSnapPageScroll = {
  titles?: string[];
  onScroll?: (page: number, progress: number) => void;
} & PropsWithChildren;

const DAMP = 2;

export const SnapPageScroll: FC<PSnapPageScroll> = ({
  titles,
  onScroll,
  children,
}) => {
  const l = Array.isArray(children) ? children.length : 1;
  const containerRef = useRef<HTMLDivElement>(null!);
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0); // TODO progress to be used for animation

  useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      // FIXME : last page issue -> quick fix with tolerance
      const t = Math.min(scrollYProgress * l, l - 0.01);
      const p = Math.floor(t);
      const prog = t % 1;
      // console.log("prog", prog)
      onScroll?.(p, prog);
      setPage(t - (t % 1));
      setProgress(t % 1);
    },
    default: {
      immediate: true,
    },
  });

  const [{ current }] = useSpring(
    {
      current: page,
      config: {
        mass: 2,
        tension: 1000,
        friction: 100,
        precision: 0.0001,
      },
    },
    [page],
  );

  const phandler = (i: number) => {
    containerRef.current.scrollTo({
      top: Math.ceil(
        ((DAMP * l - 1) / (DAMP * l)) *
          containerRef.current.clientHeight *
          i *
          DAMP,
      ),
      behavior: "smooth",
    });
  };

  return (
    <div ref={containerRef} className={styles.snapContainer}>
      <Indicator
        length={l}
        titles={titles}
        current={page}
        progress={progress}
        phandler={phandler}
      />
      <ALayer current={current} l={l}>
        {children}
      </ALayer>

      <div style={{ height: `${l * DAMP * 100}%` }} />
    </div>
  );
};

type TAnimatedLayer = {
  current: SpringValue;
  l: number;
} & PropsWithChildren;

const ALayer = ({ children, current, l }: TAnimatedLayer) => {
  const ChildArray = Array.isArray(children) ? children : [children];
  return (
    <div
      className={styles.snapAnimateContainer}
      style={{ height: `${DAMP * l * 100}%` }}
    >
      <div className={styles.snapAnimateSectionContainer}>
        {ChildArray.map((child, i) => {
          return (
            <animated.div
              key={i}
              className={styles.snapSection}
              style={{ y: current.to([i - 1, i], ["100%", "0"]) }}
            >
              {child}
            </animated.div>
          );
        })}
      </div>
    </div>
  );
};

type TSnapPage = {
  child: ReactNode;
  progress: number;
};
