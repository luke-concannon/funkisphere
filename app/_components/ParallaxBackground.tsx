'use client'

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse'
import Image from 'next/image'

export default function ParallaxBackground() {
  return (
    <div className='w-full h-full bg-funk-pink'>
      <MouseParallaxContainer
        className='w-full h-full'
        globalFactorX={0.1}
        globalFactorY={0.1}
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={2}
          factorY={2}
          style={{
            backgroundPositionY: '50%',
            transform: 'scale(1.3)',
            backgroundSize: 'auto',
          }}
          className='absolute right-0 lg:right-auto lg:-bottom-1/4 top-1/3 lg:top-auto'
        >
          <Image
            priority
            height={1080}
            width={1260}
            src='/images/pingers.png'
            alt=''
            className='z-0'
          />
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.5}
          factorY={0.5}
          className='flex w-full h-full flex-row items-center justify-center'
        >
          <Image
            priority
            height={1200}
            width={800}
            src='/images/angel-of-funk.png'
            alt=''
            className='z-10 lg:relative lg:left-1/4'
          />
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  )
}
