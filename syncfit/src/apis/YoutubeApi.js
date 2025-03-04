import axios from 'axios';

const BASE_URL = 'http://spring-server:8080';

export const getYoutubeVideo = (accessToken, searchQuery) => {
  return axios.get(`${BASE_URL}/music/youtube`, {
    params: { query: searchQuery },
    headers: { 'Authorization': `Bearer ${accessToken}` },
  })
  .then(response => {
    return response.data.data.videoId;
  });
}
