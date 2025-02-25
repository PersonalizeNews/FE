import axios from 'axios';

const BASE_URL = 'http://ec2-43-202-146-45.ap-northeast-2.compute.amazonaws.com:8080';

export const createWishlist = async (title, imageFile, accessToken) => {
  const formData = new FormData();
  formData.append("title", title);
  formData.append("image", imageFile);

  const response = await axios.post(
    `${BASE_URL}/wishlist`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

export const getWishlists = async (accessToken) => {
  const response = await axios.get(`${BASE_URL}/wishlist`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const deleteWishlist = async (wishlistId, accessToken) => {
  const response = await axios.delete(`${BASE_URL}/wishlist/${wishlistId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const updateWishlist = async (wishlistId, title, imageFile, accessToken) => {
  const formData = new FormData();
  if (title) formData.append("title", title);
  if (imageFile) formData.append("image", imageFile);

  const response = await axios.patch(
    `${BASE_URL}/wishlist/${wishlistId}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};