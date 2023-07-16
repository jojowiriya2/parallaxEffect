import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const Test1 = () => {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
  
  <div className='w-full h-[50vh] bgv flex absolute'>
    <Parallax pages={2}>
        <ParallaxLayer sticky={{ start: 0, end: 1 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
        <div className=' m-11 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow' >
          <p className=' text-2xl'> I'm a sticky layer </p>
        </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
        <div className=' m-11 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow' >
          <p className=' text-2xl' >I'm not</p>
        </div>
        </ParallaxLayer>

          <ParallaxLayer offset={1} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className=' m-11 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow' >
          <p className=' text-2xl' > Neither am I</p>
        </div>
          </ParallaxLayer>
    </Parallax>
  </div>


  )
}

export default Test1