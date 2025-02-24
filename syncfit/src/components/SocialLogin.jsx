import kakaoImg from '../assets/images/kakao_login.png'
import './css/SocialLogin.css'
import { replace, useNavigate } from 'react-router-dom';
import KakaoButton from './KakaoButton';


const SocialLogin = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API;
  const REDIRECT_URI = import.meta.env.VITE_KAKAO_OAUTH_REDIRECT_URI;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const nav = useNavigate();

  const handleKakaoLogin = () => {
    window.location.href = kakaoURL;
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    nav("/" , { replace: true })
  };

  return (
    <div className="social-login">
      <h1>SyncFit</h1>
      {localStorage.getItem("accessToken") 
        ? <KakaoButton onClick={handleLogout}/>
        : <img src={kakaoImg} alt="카카오 로그인" onClick={handleKakaoLogin} />
      }
    </div>
  )
}

export default SocialLogin