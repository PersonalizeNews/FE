import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import './css/IntroTwo.css';

const playlistItems = [
  { title: "Mood Booster", artist: "Artist A" },
  { title: "Chill Vibes", artist: "Artist B" },
  { title: "Focus Beats", artist: "Artist C" },
  { title: "Happy Hits", artist: "Artist D" },
  { title: "Evening Relax", artist: "Artist E" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  },
};

const IntroTwo = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP를 활용한 초기 컨테이너 등장 애니메이션
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="intro-two">
      <motion.div
        className="playlist-container"
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        drag="y"
        dragConstraints={{ top: -100, bottom: 100 }}
      >
        {playlistItems.map((item, index) => (
          <motion.div
            className="playlist-item"
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" }}
          >
            <h3>{item.title}</h3>
            <p>{item.artist}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default IntroTwo;
