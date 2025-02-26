import React, { useState, useEffect, useContext } from 'react';
import { IoClose, IoTrash } from "react-icons/io5";
import '../css/ReadWishlistModal.css';
import { getTracks, deleteTrack } from '../../apis/TrackApi';
import { AuthContext } from '../../contexts/AuthContext';

const ReadWishlistModal = ({ onClose, wishlistId }) => {
  const { accessToken } = useContext(AuthContext);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    if (wishlistId && accessToken) {
      getTracks(wishlistId, accessToken)
        .then((res) => {
          console.log("Fetched tracks:", res);
          setTracks(res.data);
        })
        .catch((error) => {
          console.error("Error fetching tracks:", error);
        });
    }
  }, [wishlistId, accessToken]);

  const handleDeleteTrack = async (trackId) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        const res = await deleteTrack(trackId, accessToken);
        console.log("Track deleted:", res);
        // 삭제 후 UI 업데이트: state에서 해당 track 제거
        setTracks(tracks.filter(t => t.trackId !== trackId));
      } catch (error) {
        console.error("Error deleting track:", error);
      }
    }
  };

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
          {tracks.length > 0 ? (
            tracks.map(track => (
              <div key={track.trackId} className="track-item">
                <img src={track.imageUrl} alt={track.title} />
                <div className="track-info">
                  <h3>{track.title}</h3>
                  <p>{track.artistName}</p>
                </div>
                <button 
                  className="delete-track-button" 
                  onClick={() => handleDeleteTrack(track.trackId)}
                  title="삭제"
                >
                  <IoTrash size={16} />
                </button>
              </div>
            ))
          ) : (
            <p>No tracks found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadWishlistModal;
