import React from 'react'
import computer from '../images/sw-split-photo.jpg'

export default function Home() {
  return (
    <div className="split">
      <div>
        <h1 class="split-title">Empire Under Fire</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, fugit
          provident. Fugit, distinctio dolor nesciunt natus quidem laborum
          beatae ratione accusantium hic illo quas id numquam possimus,
          similique odit alias.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, fugit
          provident. Fugit, distinctio dolor nesciunt natus quidem laborum
          beatae ratione accusantium hic illo quas id numquam possimus,
          similique odit alias.
        </p>
      </div>
      <div>
        <img src={computer} alt="" />
      </div>
    </div>
  )
}
