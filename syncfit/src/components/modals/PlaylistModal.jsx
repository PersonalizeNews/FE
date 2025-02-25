import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../css/PlaylistModal.css';

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { duration: 0.7 } },
};

const PlaylistModal = ({ item, onClose }) => {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-button" onClick={onClose}>X</button>
            <img
              src={item.imageUrl}
              alt={`${item.title} 앨범 커버`}
              className="modal-album-image"
            />
            <h2>{item.title}</h2>
            <p>{item.artistName}</p>
            <p>{item.albumName}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlaylistModal;
