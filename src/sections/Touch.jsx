import React from 'react'
import Heading from '../components/Heading'
import { gsap } from "gsap";
import { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Touch({isMobile}) {

  const subHeader = useRef(null);

  useEffect(() => {
    const subHeaderElem = subHeader.current;
    const splitType = new SplitType(subHeaderElem, { types: "chars,words", });
    let t1 = gsap.timeline();
    t1.from(splitType.chars, {
      scrollTrigger: {
        trigger: isMobile ? "#subText-2" : "#section-2",
        start: isMobile ? "top bottom-=50" : "top bottom-=500",
        end: isMobile ? "bottom-=50 center+=250" : "top center-=300px",
        scrub: 1,
      },
      autoAlpha: 0,
      scale: 0,
      stagger: 0.02,
      skewX: "45deg",
      transformOrigin: "bottom",
      ease: "ease.in",
      delay: 1
    });
  }, [isMobile]);

  return (
    <div className='flex flex-col justify-end items-center md:items-end w-screen h-screen p-12' id='section-2'>
      <div className='mt-24'>
        <Heading content={"Intuitive Touchscreen Interface"} style={"font-sansation text-color-green-dark text-2xl md:text-3xl lg:text-5xl"} scrolled={true} section={"section-2"} isMobile={isMobile} />
        <p className=' text-color-green-dark text-sm md:text-2xl lg:text-4xl font-extralight' ref={subHeader} id='subText-2'>
          Easily navigate settings, adjust focus, and review<br />
          footage with a user-friendly touchscreen interface,<br />
          simplifying the video recording process for users of<br />
          all experience levels.
        </p>
      </div>
    </div>
  )
}
