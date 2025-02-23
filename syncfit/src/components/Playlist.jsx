import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import './css/Playlist.css';

const playlistItems = [
  {
    artistName: "Jimin",
    title: "Who",
    albumName: "MUSE",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec"
  },
  {
    artistName: "DAY6",
    title: "HAPPY",
    albumName: "Fourever",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b2731e20be5a6bdfd2780516320a"
  },
  {
    artistName: "Jimin",
    title: "Be Mine",
    albumName: "MUSE",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273f02c451189a709b9a952aaec"
  },
  {
    artistName: "NewJeans",
    title: "Supernatural",
    albumName: "Supernatural",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b2737e1eeb0d7cc374a168369c80"
  },
  {
    artistName: "NewJeans",
    title: "How Sweet",
    albumName: "How Sweet",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273b657fbb27b17e7bd4691c2b2"
  },
  {
    artistName: "fromis_9",
    title: "Supersonic",
    albumName: "Supersonic",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b2730490e8ab48790ca6e5add267"
  },
  {
    artistName: "ILLIT",
    title: "Magnetic",
    albumName: "SUPER REAL ME",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b273f037c5fb9de6c78726cb8e2c"
  }
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

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } }
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { duration: 0.5 } }
};

const Playlist = () => {
  const containerRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

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
            onClick={() => handleItemClick(item)}
          >
            <div className="album-cover">
              <img
                src={item.imageUrl}
                alt={`${item.title} 앨범 커버`}
                className="album-image"
              />
            </div>
            <div className="album-details">
              <h3>{item.title}</h3>
              <p>{item.artistName}</p>
              <span className="album-name">{item.albumName}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="modal-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={closeModal}
          >
            <motion.div
              className="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-button" onClick={closeModal}>X</button>
              <img
                src={selectedItem.imageUrl}
                alt={`${selectedItem.title} 앨범 커버`}
                className="modal-album-image"
              />
              <h2>{selectedItem.title}</h2>
              <p>{selectedItem.artistName}</p>
              <p>{selectedItem.albumName}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Playlist;
