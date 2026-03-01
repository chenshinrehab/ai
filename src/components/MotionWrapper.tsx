"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  type?: "fadeInUp" | "stagger" | "scale";
}

export default function MotionWrapper({ children, delay = 0, className, type = "fadeInUp" }: Props) {
  // 💡 通用的 Viewport 設定，確保動畫只執行一次，並在進入視窗 10% 時觸發
  const viewportConfig = { once: true, amount: 0.1 };

  if (type === "stagger") {
    return (
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={viewportConfig}
        variants={{
          initial: {},
          whileInView: { transition: { staggerChildren: 0.15, delayChildren: delay } }
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  // 💡 純粹的動畫數值
  const variants = {
    fadeInUp: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
    },
    scale: {
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 },
    }
  };

  return (
    <motion.div
      initial="initial"
      whileInView="whileInView"
      viewport={viewportConfig} // 🟢 移到這裡才是正確的獨立屬性
      variants={variants[type as keyof typeof variants]}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // 🟢 使用更平滑的貝茲曲線減少抖動
      }}
      // 🟢 加上 willChange 告訴瀏覽器這是一個會動的層，優化效能
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}