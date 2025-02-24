import React, { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoading } from '../contexts/LoadingContext';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

const OAuthCallback = () => {
  const location = useLocation();
  const nav = useNavigate();
  const { setLoading } = useLoading();
  const { login } = useContext(AuthContext); 

  useEffect(() => {
    setLoading(true);
    const searchParams = new URLSearchParams(location.search);
    const code = searchParams.get('code');

    if (code) {
      axios
        .post('http://ec2-43-202-146-45.ap-northeast-2.compute.amazonaws.com:8080/auth/social-login', { code }, {
          headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
          console.log('로그인 성공:', response.data.data.accessToken);
          
          localStorage.setItem("accessToken", response.data.data.accessToken);
          login(response.data.data.accessToken);
          setLoading(false)
          nav('/', { replace: true });
        })
        .catch(error => {
          console.error('토큰 요청 실패:', error.response ? error.response.data : error.message);
          setLoading(false)
          nav('/login', { replace: true });
        });
    } else {
      nav('/', { replace: true });
    }
  }, [location, nav]);

  return <></>;
};

export default OAuthCallback;
