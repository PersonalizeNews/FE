import React from 'react'
import RecommendedPlaylist from '../components/RecommendedPlaylist'
import WithoutFooterLayout from '../components/Layout/WithoutFooterLayout'

const PlayList = () => {
  return (
    <WithoutFooterLayout>
      <RecommendedPlaylist />
    </WithoutFooterLayout>
  )
}

export default PlayList