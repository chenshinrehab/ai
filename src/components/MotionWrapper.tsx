"use client";

import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
  children: ReactNode;
  delay?: number; // 單位為 ms
  className?: string;
  // 🟢 加入 "fadeIn" 類型，並保留原本的選項
  type?: "fadeIn" | "fadeInUp" | "stagger" | "scale";
}

export default function MotionWrapper({ children, delay = 0, className = "", type = "fadeInUp" }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px -5% 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 🟢 根據 type 決定初始樣式
  const getInitialStyles = () => {
    switch (type) {
      case "fadeIn":
        return "opacity-0"; // 純淡入，無位移，效能最高
      case "scale":
        return "opacity-0 scale-[0.96] translate-z-0";
      case "fadeInUp":
      default:
        return "opacity-0 translate-y-[15px] md:translate-y-[30px] translate-z-0";
    }
  };

  // 🟢 根據 type 決定進場樣式
  const getVisibleStyles = () => {
    switch (type) {
      case "fadeIn":
        return "opacity-100";
      case "scale":
        return "opacity-100 scale-100 translate-z-0";
      case "fadeInUp":
      default:
        return "opacity-100 translate-y-0 translate-z-0";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`
        ${className}
        ${isVisible ? getVisibleStyles() : getInitialStyles()}
        transition-all duration-500 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]
      `}
      style={{
        transitionDelay: `${delay}ms`,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        // 🟢 只有在位移型動畫才需要 willChange transform，純 fadeIn 則自動優化
        willChange: isVisible ? 'auto' : (type === "fadeIn" ? "opacity" : "transform, opacity"),
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      {children}
    </div>
  );
}