import React from 'react'
import lens from "../assets/images/lens.png"

export default function Base() {
    return (
        <div className='h-screen w-screen' id='section-5'>
            <div className="absolute flex justify-center items-center w-full h-full bg-[#FDFDFD] text-color-black font-sansation text-7xl md:text-[300px]">
                <span className='h-24 md:h-[300px]'>L</span>
                <span className='h-24 md:h-[300px]'>U</span>
                <span className='h-24 md:h-[300px]'>M</span>
                <span className='h-24 md:h-[300px]'>
                    <img src={lens} alt="lens" className='scale-125 absolute -mt-7 md:-mt-14 h-6 md:h-20 w-6 md:w-20'/>
                    <div>I</div>
                </span>
                <span className='h-24 md:h-[300px]'>E</span>
                <span className='h-24 md:h-[300px]'>R</span>
                <span className='h-24 md:h-[300px]'>E</span>
            </div>
        </div>
    )
}
