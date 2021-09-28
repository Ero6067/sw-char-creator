import React from 'react'
import computer from '../images/sw-split-photo.jpg'
import { SplitImg, Split, SplitTitle } from '../Styled/Split'

export default function Home() {
  return (
    <Split>
      <div>
        <SplitTitle>Empire Under Fire</SplitTitle>
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
        <SplitImg src={computer} alt="" />
      </div>
    </Split>
  )
}
