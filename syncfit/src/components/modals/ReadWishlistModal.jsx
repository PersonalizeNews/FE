import React from 'react';
import { IoClose } from "react-icons/io5";
import '../css/ReadWishlistModal.css';

const dummyTracks = [
  {
    trackId: 1,
    artistName: "Tony Herrera",
    title: "RockstarBaby",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b2736208670eb95b258acf4de537"
  },
  {
    trackId: 2,
    artistName: "Juan Botello",
    title: "Rockstar",
    imageUrl: "https://i.scdn.co/image/ab67616d0000b2738b63d0718b9b252eb7248b6e"
  }
];

const ReadWishlistModal = ({ onClose, wishlistId }) => {
  return (
    <div className="read-wishlist-modal">
      <div className="read-wishlist-modal-container">
        <div className="read-wishlist-modal-header">
          <h2>Wishlist {wishlistId} - Tracks</h2>
          <button className="close-button" onClick={onClose}>
            <IoClose size={24} />
          </button>
        </div>
        <div className="read-wishlist-modal-content">
          {dummyTracks.map(track => (
            <div key={track.trackId} className="track-item">
              <img src={track.imageUrl} alt={track.title} />
              <div className="track-info">
                <h3>{track.title}</h3>
                <p>{track.artistName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadWishlistModal;
