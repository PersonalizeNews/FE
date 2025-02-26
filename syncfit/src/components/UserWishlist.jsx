import React, { useState, useEffect, useContext } from 'react';
import './css/UserWishlist.css';
import wishlist from '../assets/videos/wishlist.mp4';
import { AuthContext } from '../contexts/AuthContext';
import CreateWishlistModal from './modals/CreateWishlistModal';
import ReadWishlistModal from './modals/ReadWishlistModal';
import UpdateWishlistModal from './modals/UpdateWishlistModal';
import { IoAdd, IoPencil, IoTrash } from "react-icons/io5";
import { getWishlists, deleteWishlist } from '../apis/WishlistApi';

const UserWishlist = () => {
  const { nickname, profileImg, accessToken } = useContext(AuthContext);
  const [ wishlists, setWishlists ] = useState([]);
  const [ createModalOpen, setCreateModalOpen ] = useState(false);
  const [ readModalOpen, setReadModalOpen ] = useState(false);
  const [ updateModalOpen, setUpdateModalOpen ] = useState(false);
  const [ selectedWishlist, setSelectedWishlist ] = useState(null);

  useEffect(() => {
    if (accessToken) {
      getWishlists(accessToken)
        .then((data) => {
          setWishlists(data.data);
        })
        .catch((error) => console.error("Error fetching wishlists:", error));
    }
  }, [accessToken]);

  const handleAddList = () => {
    setCreateModalOpen(true);
  };

  const handleCloseCreateModal = () => {
    setCreateModalOpen(false);
    if (accessToken) {
      getWishlists(accessToken)
        .then((data) => setWishlists(data.data))
        .catch((error) => console.error("Error fetching wishlists:", error));
    }
  };

  const handleItemClick = (wishlist) => {
    setSelectedWishlist(wishlist);
    setReadModalOpen(true);
  };

  const handleCloseReadModal = () => {
    setReadModalOpen(false);
    setSelectedWishlist(null);
  };

  const handleDelete = async (wishlistId) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await deleteWishlist(wishlistId, accessToken);
        setWishlists(wishlists.filter(item => item.id !== wishlistId));
      } catch (error) {
        console.error("삭제 실패:", error);
      }
    }
  };

  const handleUpdateClick = (wishlist) => {
    setSelectedWishlist(wishlist);
    setUpdateModalOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setUpdateModalOpen(false);
    setSelectedWishlist(null);
    if (accessToken) {
      getWishlists(accessToken)
        .then((data) => setWishlists(data.data))
        .catch((error) => console.error("Error fetching wishlists:", error));
    }
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
          {wishlists.map(item => (
            <div
              key={item.id}
              className="wishlist-list-item"
              // 항상 배경 이미지로 cover 효과 적용
              style={{
                backgroundImage: `url(${item.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              onClick={() => handleItemClick(item)}
            >
              <div className="wishlist-item-overlay">
                <h3>{item.title}</h3>
                <div className="item-actions">
                  <button onClick={(e) => { e.stopPropagation(); handleUpdateClick(item); }} title="수정">
                    <IoPencil size={16} />
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }} title="삭제">
                    <IoTrash size={16} />
                  </button>
                </div>
              </div>
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
            wishlistId={selectedWishlist ? selectedWishlist.id : null}
            wishlist={selectedWishlist}
          />
        )}
        {updateModalOpen && selectedWishlist && (
          <UpdateWishlistModal 
            onClose={handleCloseUpdateModal} 
            wishlist={selectedWishlist}
          />
        )}
      </div>
    </>
  );
};

export default UserWishlist;
