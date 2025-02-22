import kakaoImg from '../assets/images/kakao_login.png'
import './css/SocialLogin.css'

const SocialLogin = () => {

  const handleLogin = () => {
    console.log("클릭되었습니다")
  }
  return (
    <div className="socialLogin" onClick={handleLogin}>
      <h1>SyncFit</h1>
      <img src={kakaoImg} alt="" />
    </div>
  )
}

export default SocialLogin