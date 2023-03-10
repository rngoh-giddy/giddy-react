import React from 'react'
import Stack from 'react-bootstrap/Stack';

export default function ArticleAuthor({ author, published }) {
  return (
    <Stack gap={2}>
      <div>{published} </div>
      <div className='fw-bold'>Written by: {author?.name} | </div>
    </Stack>
  )
}
