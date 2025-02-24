import axios from 'axios';

const BASE_URL = 'http://ec2-43-202-146-45.ap-northeast-2.compute.amazonaws.com:8080';

export const musicRecommendation = (JSONData, accessToken) => {
  return axios
    .post(
      `${BASE_URL}/music/recommendation`,
      JSONData,
      {  
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        }
      }
    )
    .then(res => {
      const genre = res.data.data.genre;
      console.log('추천 장르:', genre);

      return axios.get(`${BASE_URL}/music/search`, {
        params: { genres: genre },
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      });
    })
    .then(getRes => {
      console.log('검색 결과:', getRes.data.data);
      return getRes.data.data;
    })
    .catch(err => {
      console.error('음악 추천 요청 실패:', err.response ? err.response.data : err.message);
      throw err;
    });
};
