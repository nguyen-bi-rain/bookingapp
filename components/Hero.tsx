import { PlayButton } from '@/lib/assest'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className="grid place-items-center pt-[256px] max-w-3xl mx-auto ">
            <h2 className="text-5xl font-bold text-text-color" >We Find The Best Tours For You</h2>
            <p className="font-normal max-w-xl text-center my-5 text-base text-text-color">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div className="flex items-center gap-2">
                <button><Image src={PlayButton} alt="play" /></button>
                <span className="text-text-color text-xl font-semibold">Watch Video</span>
            </div>
        </div>
    )
}

export default Hero