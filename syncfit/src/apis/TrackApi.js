import axios from 'axios';

const BASE_URL = 'http://spring-server:8080';

export const addTrack = async (trackData, accessToken) => {
  const response = await axios.post(
    `${BASE_URL}/tracks`,
    trackData,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.data;
};

export const getTracks = async (wishlistId, accessToken) => {
  const response = await axios.get(`${BASE_URL}/tracks/${wishlistId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const deleteTrack = async (trackId, accessToken) => {
  const response = await axios.delete(`${BASE_URL}/tracks/${trackId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};