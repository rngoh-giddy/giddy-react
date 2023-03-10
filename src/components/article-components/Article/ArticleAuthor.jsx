import React from 'react'

export default function ArticleAuthor({ author, published }) {
  return (
    <div>
    <p>Written by: {author?.name} | Published {published} </p>
  </div>
  )
}
