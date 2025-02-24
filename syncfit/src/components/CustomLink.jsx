import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CustomLink = ({to, className, text, icon}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
    >
      <Link to={to} className={className}>{icon}{text}</Link>
    </motion.div>
  )
}

export default CustomLink