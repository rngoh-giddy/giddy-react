import React from 'react'
import Stack from 'react-bootstrap/Stack';

export default function ArticleAuthor({ author, published }) {
  return (
    <Stack gap={2}>
      <div className='font-size-12'>{published} </div>
      <div className='font-size-20 text-slate-pro-medium'>Written by: {author?.name} | </div>
    </Stack>
  )
}
