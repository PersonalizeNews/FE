import axios from 'axios';

const BASE_URL = 'http://ec2-43-202-146-45.ap-northeast-2.compute.amazonaws.com:8080';

export const getUsers = async (accessToken) => {
  const response = await axios.get(`${BASE_URL}/admin/members`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};

export const deleteUser = async (memberId, accessToken) => {
  console.log(memberId)
  const response = await axios.delete(`${BASE_URL}/admin/members/${memberId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return response.data;
};
