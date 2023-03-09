import React from 'react'

export default function ArticleAuthor({ author, published }) {
  return (
    <p>Written by: {author?.name} | Published {published} </p>
  )
}
