// src/components/UserWishlist.jsx
import React, { useState, useContext } from 'react';
import './css/UserWishlist.css';
import wishlist from '../assets/videos/wishlist.mp4';
import { AuthContext } from '../contexts/AuthContext';
import CreateWishlistModal from './modals/CreateWishlistModal';
import ReadWishlistModal from './modals/ReadWishlistModal';
import { IoAdd } from "react-icons/io5";

const mockWishlist = [
  { id: 1, title: "나의 첫 번째 위시리스트" },
  { id: 2, title: "나의 두 번째 위시리스트" },
  { id: 3, title: "나의 세 번째 위시리스트" }
];

const UserWishlist = () => {
  const { nickname, profileImg } = useContext(AuthContext);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [readModalOpen, setReadModalOpen] = useState(false);
  const [selectedWishlistId, setSelectedWishlistId] = useState(null);

  const handleAddList = () => {
    setCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
  };

  const handleItemClick = (wishlistId) => {
    setSelectedWishlistId(wishlistId);
    setReadModalOpen(true);
  };

  const handleCloseReadModal = () => {
    setReadModalOpen(false);
    setSelectedWishlistId(null);
  };

  return (
    <>
      <video autoPlay loop muted>
        <source src={wishlist} type="video/mp4" />
      </video>
      <div className="wishlist">
        <div className="wishlist-header">
          <div className="wishlist-header-img">
            <img src={profileImg} alt="프로필" />
          </div>
          <h1>{nickname}'s Playlist</h1>
        </div>
        <div className="wishlist-list">
          {mockWishlist.map(item => (
            <div
              key={item.id}
              className="wishlist-list-item"
              onClick={() => handleItemClick(item.id)}
            >
              <img src="https://via.placeholder.com/300" alt="커버" />
              <h3>{item.title}</h3>
            </div>
          ))}
          <div 
            className="wishlist-list-item add-item"
            onClick={handleAddList}
          >
            <h3><IoAdd size={20} /></h3>
          </div>
        </div>
        {createModalOpen && <CreateWishlistModal onClose={handleCloseCreateModal} />}
        {readModalOpen && (
          <ReadWishlistModal 
            onClose={handleCloseReadModal} 
            wishlistId={selectedWishlistId}
          />
        )}
      </div>
    </>
  );
};

export default UserWishlist;
