import { useSpring, animated } from "@react-spring/web";
import React from "react";

interface AnimateProps {
  size?: number;
  reverse?: boolean;
  toggle?: boolean;
  delay?: number;
  children?: React.ReactNode;
}

export function RotatingIcon({
  children,
  toggle,
  size = 24,
  delay = 0,
}: AnimateProps) {
  const props = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: toggle ? "rotate(360deg)" : "rotate(0deg)" },
    config: { tension: 300, friction: 50, delay: delay },
  });

  return (
    <animated.div style={{ ...props, width: size, height: size }}>
      {children}
    </animated.div>
  );
}

export function TranslateIcon({
  children,
  toggle,
  reverse = false,
  size = 24,
  delay = 0,
}: AnimateProps) {
  const s = reverse ? -size : size;
  const props = useSpring({
    from: { transform: toggle ? `translateX(${s}px)` : "translateX(0px)" },
    to: { transform: "translateX(0px)" },
    config: { tension: 300, friction: 50 },
    loop: true,
    delay: delay,
  });

  return (
    <animated.div style={{ ...props, width: size, height: size }}>
      {children}
    </animated.div>
  );
}
