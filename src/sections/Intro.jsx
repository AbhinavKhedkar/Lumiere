import Heading from "../components/Heading";
import React from 'react'
import { gsap } from "gsap";
import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Intro() {

  const subHeader = useRef(null);

  useEffect(() => {
    const subHeaderElem = subHeader.current;
    const splitType = new SplitType(subHeaderElem, { types: "chars,words", });
    gsap.from(splitType.chars, {
      autoAlpha: 0,
      scale: 0,
      stagger: 0.02,
      skewX: "45deg",
      transformOrigin: "bottom",
      ease: "ease.in",
      delay: 1
    })
  }, [])

  return (
    <div className='flex flex-col justify-end w-screen h-screen p-12 mt-5' id='section-1'>
        <Heading content={"WHERE VISUAL SPARK & STORIES UNFOLD"} style={'text-center font-sansation text-color-green-dark text-2xl md:text-4xl lg:text-6xl w-full font-bold'} scrolled={false} />
      <p className='justify-center text-center text-color-green-dark text-sm md:text-2xl lg:text-4xl w-full font-extralight' ref={subHeader}>
        Where innovation meets elegance, capturing every moment with<br/>
        unparalleled clarity and precision.
      </p>
    </div>
  )
}
