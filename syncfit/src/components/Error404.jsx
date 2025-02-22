import Lottie from "lottie-react";
import notfoundLottie from '../assets/animations/error404Lottie.json'
import { Link } from 'react-router-dom'
import './css/error404.css'

const Error404 = () => {
  return (
    <div className='error404'>
      <Lottie animationData={notfoundLottie} />
      <div className='error404-content'>
        <h1>Oops</h1>
        <h1>404</h1>
        <Link to=".." className='error404-link'>홈으로 이동</Link>
      </div>
    </div>
  )
}

export default Error404