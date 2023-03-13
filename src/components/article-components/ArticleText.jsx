import React from 'react'

export default function ArticleText({ body }) {
  return (
    <div dangerouslySetInnerHTML={{__html: body}} />
  )
}
