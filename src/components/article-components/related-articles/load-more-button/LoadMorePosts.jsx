import React from 'react'

import "./LoadMorePosts.css";

export default function LoadMorePosts({ loading, loadMore }) {
  return (
    <a className='load-more mb-5' onClick={loading ? null : loadMore}>
        <p className='mb-0'>{loading ? 'Loading...' : 'Load More Posts'}</p>
    </a>
  )
}
