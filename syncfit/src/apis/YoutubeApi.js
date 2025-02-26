import axios from 'axios';

const BASE_URL = 'http://ec2-43-202-146-45.ap-northeast-2.compute.amazonaws.com:8080';

export const getYoutubeVideo = (accessToken, searchQuery) => {
  return axios.get(`${BASE_URL}/music/youtube`, {
    params: { query: searchQuery },
    headers: { 'Authorization': `Bearer ${accessToken}` },
  })
  .then(response => {
    return response.data.data.videoId;
  });
}
