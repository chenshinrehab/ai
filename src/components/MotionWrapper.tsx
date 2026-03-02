"use client";

import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
  children: ReactNode;
  delay?: number; // 單位為 ms
  className?: string;
  type?: "fadeInUp" | "stagger" | "scale";
}

export default function MotionWrapper({ children, delay = 0, className = "", type = "fadeInUp" }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 使用 requestAnimationFrame 確保在瀏覽器繪製幀觸發，達到極致流暢
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          // 觸發後立即停止偵測，釋放記憶體
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      {
        threshold: 0.01,
        rootMargin: '0px 0px -5% 0px' // 稍微進入視區才觸發，提升感知效能
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 根據 type 決定初始樣式與進場樣式
  const getInitialStyles = () => {
    switch (type) {
      case "scale":
        return "opacity-0 scale-[0.96] translate-z-0";
      case "fadeInUp":
      default:
        return "opacity-0 translate-y-[15px] md:translate-y-[30px] translate-z-0";
    }
  };

  const getVisibleStyles = () => {
    switch (type) {
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
        transition-all duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)]
      `}
      style={{
        // 使用 CSS 變數處理延遲，減少 Inline Style 運算
        transitionDelay: `${delay}ms`,
        // 強制開啟 3D GPU 加速，徹底解決卡頓
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        willChange: isVisible ? 'auto' : 'transform, opacity',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      {children}
    </div>
  );
}