import React from 'react'
import Stack from 'react-bootstrap/Stack';

export default function ArticleAuthor({ author, published }) {
  return (
    <Stack gap={2}>
      <style>{`
          .aa-stack{
            font-size: 20px;
          }
        `}
      </style>
      <div>{published} </div>
      <div className='aa-stack fw-bold'>Written by: {author?.name} | </div>
    </Stack>
  )
}
