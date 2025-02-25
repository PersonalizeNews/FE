// src/apis/WishlistApi.js
import axios from 'axios';

const BASE_URL = 'http://ec2-43-202-146-45.ap-northeast-2.compute.amazonaws.com:8080';


export const createWishlist = async (title, accessToken) => {
  const response = await axios.post(
    `${BASE_URL}/wishlist`,
    { title },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  ).then(res => console.log(res))
  return response.data;
};


export const getWishlists = async (accessToken) => {
  const response = await axios.get(`${BASE_URL}/wishlist`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
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

export const updateWishlist = async (wishlistId, newTitle, accessToken) => {
  const response = await axios.put(
    `${BASE_URL}/wishlist/${wishlistId}`,
    { title: newTitle },
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};