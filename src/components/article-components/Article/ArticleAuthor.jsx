import React from 'react'

export default function ArticleAuthor({ author, published }) {
  return (
    <div>
    <p className='fw-bold font-size-12 mb-1'>By: {author?.name} </p>
    <p className='font-size-12'>{published} </p>
  </div>
  )
}
