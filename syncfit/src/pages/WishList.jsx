import React from 'react'
import WithoutFooterLayout from '../components/Layout/WithoutFooterLayout'
import UserWishlist from '../components/UserWishlist'

const WishList = () => {
  return (
    <WithoutFooterLayout>
      <UserWishlist />
    </WithoutFooterLayout>
  )
}

export default WishList