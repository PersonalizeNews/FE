import React from 'react'
import './css/KakaoButton.css'
import { motion } from 'motion/react'

const KakaoButton = ({ onClick }) => {
  return (
    <motion.button 
      className='kakao-button' 
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      >로그아웃
    </motion.button>
  )
}

export default KakaoButton