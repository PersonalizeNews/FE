import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import gsap from 'gsap';
import Lenis from 'lenis';
import './css/IntroOne.css';

const IntroOne = () => {
  const dragRef = useRef(null);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-20, 20]);

  useEffect(() => {
    // GSAP 애니메이션: 텍스트가 부드럽게 나타나도록
    gsap.fromTo('.intro-one-text', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });

    // Lenis 초기화: 스크롤 부드럽게 (인트로에도 자연스러운 전환을 위해)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      // 필요시 cleanup 작업
    };
  }, []);

  return (
    <div className="intro-one">
      <motion.div
        className="intro-one-card"
        ref={dragRef}
        style={{ x, rotate }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
      >
        <h1 className="intro-one-text">Welcome to SyncFit</h1>
        <p className="intro-one-subtext">Tailored playlists for your mood & situation</p>
      </motion.div>
    </div>
  );
};

export default IntroOne;
