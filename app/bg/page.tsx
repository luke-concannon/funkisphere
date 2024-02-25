'use client'

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse'
import Image from 'next/image'

export default function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: String }
}) {
  const { main_menu } = searchParams

  return (
    <div className='w-full bg-funk-pin h-full overflow-hidden'>
      <MouseParallaxContainer
        className='w-full h-full'
        globalFactorX={0.1}
        globalFactorY={0.1}
        resetOnLeave
      >
        <MouseParallaxChild
          factorX={0.3}
          factorY={0.3}
          style={{
            backgroundPositionY: '50%',
            transform: 'scale(1.2)',
            backgroundSize: 'auto',
          }}
          className='absolute left-0 -bottom-1/4 '
        >
          <Image
            height={1080}
            width={1260}
            src='/images/pingers.png'
            alt=''
            className='z-0'
          />
        </MouseParallaxChild>

        <MouseParallaxChild
          factorX={0.8}
          factorY={0.8}
          className='flex w-full h-full flex-row items-center justify-center'
        >
          <Image
            height={1200}
            width={800}
            src='/images/angel-of-funk.png'
            alt=''
            className='z-10'
          />
        </MouseParallaxChild>
        {/* <MouseParallaxChild
          factorX={0.9}
          factorY={0.5}
          style={{
            filter: 'invert(1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'auto',
            height: '100%',
          }}
        >
          <img height='50%' src='3.svg' alt='' />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.7}
          factorY={0.5}
          style={{
            filter: 'invert(1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'auto',
            height: '100%',
          }}
        >
          <img height='50%' src='4.svg' alt='' />
        </MouseParallaxChild> */}
        {/* <MouseParallaxChild
          factorX={0.5}
          factorY={0.5}
          style={{
            filter: 'invert(1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 'auto',
            height: '100%',
          }}
        >
          <img height='50%' src='5.svg' alt='' />
        </MouseParallaxChild> */}
      </MouseParallaxContainer>
    </div>
  )
}
