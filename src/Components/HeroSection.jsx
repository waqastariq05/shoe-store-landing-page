import React from 'react'
import heroImage from '../assets/Hero image.png'

const HeroSection = () => {
    return (
        <>
            <div className="flex justify-between items-center mx-auto w-[1110.6px] h-[653.5px]">
                <div className="w-[378.1px] text-left">
                    <div className="tracking-[0.02em] mb-3 capitalize font-semibold inline-block ">
                        Sneakers collection
                    </div>
                    <div className="text-29xl uppercase font-extrabold inline-block w-[378.1px] mb-10">
                        <p className="[margin-block-start:0] [margin-block-end:3px]">{`Good Shoes `}</p>
                        <p className="[margin-block-start:0] [margin-block-end:3px]">{`take you `}</p>
                        <p className="m-0">good places</p>
                    </div>
                    <button className="cursor-pointer [border:none] p-0 rounded-3xs bg-deeppink tracking-[0.02em] capitalize font-montserrat text-white text-center w-[161.2px] h-[50.3px] text-xl font-semibold">
                        Shop Now
                    </button>
                </div>
                <img
                    className="w-[824.7px] h-[653.5px] object-cover"
                    alt=""
                    src={heroImage}
                />
            </div>
        </>
    )
}

export default HeroSection
