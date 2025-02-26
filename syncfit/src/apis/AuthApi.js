import axios from 'axios';

const BASE_URL = 'http://ec2-43-202-146-45.ap-northeast-2.compute.amazonaws.com:8080';

export const socialLogin = (code) => {
  return axios.post(
    `${BASE_URL}/auth/social-login`,
    { code },
    { 
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true
    },
    
  );
};

export const socialLogout = (accessToken) => {
  return axios.post(
    `${BASE_URL}/members/logout`,
    {},
    { headers: { 'Authorization': `Bearer ${accessToken}`}}
  )
}

export const userInfo = (accessToken) => {
  return axios.get(
    `${BASE_URL}/members/me`,
    { headers: { 'Authorization': `Bearer ${accessToken}` } }
  );
}
