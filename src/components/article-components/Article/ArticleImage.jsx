import React from 'react'
import Image from 'react-bootstrap/Image'

export default function ArticleImage({ image }) {
  return (
    <Image rounded='10px' fluid src={`${image}`} alt="" />
  )
}
