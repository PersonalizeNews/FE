import axios from 'axios';

const BASE_URL = 'http://spring-server:8080';

export const socialLogin = (code) => {
  return axios.post(
    `${BASE_URL}/auth/social-login`,
    { code },
    { headers: { 'Content-Type': 'application/json' } }
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
