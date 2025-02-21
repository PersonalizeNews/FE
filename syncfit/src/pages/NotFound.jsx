import React from 'react'
import Layout from '../components/Layout/Layout'
import './css/notfound.css'
import Lottie from "lottie-react";
import notfoundLottie from '../assets/animations/notfoundLottie.json'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Layout>
      <div className='notfound'>
        <Lottie animationData={notfoundLottie} /> 
         <div className='notfound-content'>
          <h1>Oops</h1>
          <h1>404</h1>
          <Link to=".."  className='notfound-link'>홈으로 이동</Link>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound