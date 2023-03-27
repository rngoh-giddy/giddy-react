import React from 'react'

import './style/SpinningLoader.scss';

export default function SpinningLoader() {
  return (
    <div class="d-flex justify-content-center spinning-loader giddy-blue">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
  )
}
