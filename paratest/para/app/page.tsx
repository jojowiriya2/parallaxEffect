"use client"

import Image from 'next/image'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './text'
import Test1 from './test1'
import Test2 from './test2'

const url = (name: string, wrap = false) =>
`${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function Home() {
  return (
    <div>
      <Parallax pages={2.7} style={{ top: '0', left: '0' }} className='ani'>

      <ParallaxLayer offset={0}  speed={0.1}>
        <div className='ani_layer parallax' id='bgart'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0}  speed={0.3}>
        <div className='ani_layer parallax' id='moun'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0}  speed={0.1}>
        <div className='ani_layer  parallax' id=''>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.2}>
        <div className='ani_layer parallax' id='jun1'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.1}>
        <div className='ani_layer parallax' id='jun2'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.2}>
        <div className='ani_layer parallax' id='jun3'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.1}>
        <div className='ani_layer parallax' id='jun4'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.2}>
        <div className='ani_layer parallax' id='man'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={0.1}>
        <div className='ani_layer parallax' id='jun5'></div>
      </ParallaxLayer>

      <ParallaxLayer offset={0.75} speed={0.2}>
      <TextBlock/>
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.2}>
      <Test1/>
      </ParallaxLayer>

      <ParallaxLayer offset={1.9} speed={0.2}>
      <Test2/>
      </ParallaxLayer>

    </Parallax>
    </div>
   
  )
}
