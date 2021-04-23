import React from 'react'
import HowItWorks from './HowItWorks';
import HomeHero from './HomeHero';
import Collection from './Collection';
import USP from './USP';

export default function Home() {
  return (
    <>
      <HomeHero/>
      <Collection/>
      <USP/>
      <HowItWorks/>
    </>
  )
}
