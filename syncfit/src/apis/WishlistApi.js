import axios from 'axios';

const BASE_URL = 'http://spring-server:8080';

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
  const patchFormData = new FormData();
  if (title) patchFormData.append("title", title);
  if (imageFile) patchFormData.append("image", imageFile);

  return axios.patch(
    `${BASE_URL}/wishlist/${wishlistId}`,
    patchFormData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  )
  .then((patchRes) => {
    console.log("PATCH update successful:", patchRes.data);
    // 이미지 POST 요청 -> Firebase 이미지 저장
    const postFormData = new FormData();
    postFormData.append("wishlistId", wishlistId);
    if (imageFile) {
      postFormData.append("files", imageFile);
    }
    return axios.post(
      `${BASE_URL}/image`,
      postFormData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
  })
  .then((postRes) => {
    console.log("POST files successful:", postRes.data);
    return postRes.data;
  });
};

export const downloadImage = async (wishlistId, accessToken) => {
  const response = await axios.get(`${BASE_URL}/image`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    params: { wishlistId },
    responseType: 'blob'
  });
  return response;
};