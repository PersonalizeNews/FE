import axios from 'axios';

const BASE_URL = 'http://ec2-43-202-146-45.ap-northeast-2.compute.amazonaws.com:8080';

export const musicRecommendation = (JSON) => {
  console.log(JSON)
  axios.post(
    `${BASE_URL}`,
    {JSON},
    { headers: {'Content-Type' : 'application/json'}}
  )
}