// src/components/WishlistModal.jsx
import React, { useState, useContext } from 'react';
import CustomButton from '../CustomButton';
import { createWishlist } from '../../apis/WishlistApi';
import { AuthContext } from '../../contexts/AuthContext';
import '../css/CreateWishlistModal.css';

const WishlistModal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const { accessToken } = useContext(AuthContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      // title만 JSON 형식으로 전송 (coverImage는 미리보기용으로만 사용)
      await createWishlist(title, accessToken);
      onClose();
    } catch (error) {
      console.error('위시리스트 생성 실패:', error);
    }
  };

  return (
    <div className="wishlist-modal">
      <div className="wishlist-modal-container">
        <form onSubmit={handleSubmit}>
          <div className="wishlist-modal-content">
            {/* 이미지 영역: 클릭하면 파일 선택 */}
            <div className="wishlist-modal-img">
              <input
                id="coverImageInput"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
              />
              <div
                className="wishlist-modal-img-input"
                onClick={() => document.getElementById("coverImageInput").click()}
              >
                {coverImage ? (
                  <img src={coverImage} alt="커버 미리보기" />
                ) : (
                  <span>Image</span>
                )}
              </div>
            </div>
            {/* 제목 입력 영역 */}
            <div className="wishlist-modal-title">
              <input
                type="text"
                placeholder="TITLE"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="wishlist-modal-buttons">
            <CustomButton
              type="submit"
              text="Create"
              className="wishlist-modal-button-create"
            />
            <CustomButton
              type="button"
              text="Cancel"
              className="wishlist-modal-button-cancel"
              onClick={onClose}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default WishlistModal;
