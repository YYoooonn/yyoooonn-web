"use client";

import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import * as styles from "./snap.css";

type Indicator = {
  titles?: string[];
  length?: number;
  current: number;
  progress: number;
  phandler?: (i: number) => void;
};

const springConfig = {
  mass: 1,
  tension: 1000,
  friction: 100,
  precision: 0.0001,
};

export function Indicator({
  current,
  progress,
  length,
  titles,
  phandler,
}: Indicator) {
  const containerRef = useRef<HTMLDivElement>(null!);
  const navRef = useRef<HTMLDivElement>(null!);
  const [navHeight, setNavHeight] = useState<string | number>("100%");
  const l = length ? length : 1;

  const handleResize = () => {
    if (navRef.current && containerRef.current) {
      setNavHeight(
        containerRef.current.offsetHeight - navRef.current.offsetHeight,
      );
    }
  };

  // Add event listener for resize
  useEffect(() => {
    // set initial height
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // page index
  const [{ x }] = useSpring(
    {
      x: current,
      config: springConfig,
    },
    [current],
  );

  // process index
  const [{ y }] = useSpring(
    {
      y: current + progress,
      config: springConfig,
    },
    [progress],
  );

  const handleClick = (i: number) => {
    if (phandler) phandler(i);
  };

  return (
    <div ref={containerRef} className={styles.scrollContainer}>
      <div className={styles.indContainer} style={{ height: navHeight }}>
        <animated.h3
          className={styles.indText}
          style={{
            top: x.to((val) => `${(val * 100) / l}%`),
          }}
        >
          {titles ? titles[Number(current)] : `${current}`}
        </animated.h3>
        <animated.h4
          className={styles.baseInd}
          ref={navRef}
          style={{
            top: y.to((val) => `${(val / l) * 100}%`),
          }}
        >
          {(Math.trunc(progress * 10) / 10).toFixed(1).substring(1)}
        </animated.h4>
      </div>
      <div className={styles.indContainer} style={{ height: navHeight }}>
        {Array.from({ length: l }, () => null).map((_, i) => {
          return (
            <h3
              className={styles.indSelector}
              onClick={() => handleClick(i)}
              key={i}
              style={{ top: `${(100 * i) / l}%` }}
            >
              {titles ? titles[i] : i}
            </h3>
          );
        })}
      </div>
    </div>
  );
}
