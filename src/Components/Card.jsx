import React from 'react'
import cardImage from '../assets/Card_image.png'

const Card = () => {
    return (
        <>
            <div className="w-[350px] h-[438px] text-center rounded-3xs bg-white">
                <img
                    className="w-[313.4px] h-56 object-cover rounded-3xs pt-5"
                    alt=""
                    src={cardImage}
                />
                <div className=''>
                    <h2 className="tracking-[0.01em] mb-5 capitalize font-semibold inline-block ">Nike Sneakers</h2>
                    <div className='w-[300px] h-[2px] rounded-md bg-[#444444] mb-6 mx-auto' />
                    <div className='flex items-center justify-between w-[300px] h-[33px] text-center mx-auto'>
                        <div className="text-xl tracking-[0.02em] capitalize font-semibold">
                            Rs. 1500
                        </div>
                        <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-40 h-[47px] rounded-3xs bg-deeppink text-base tracking-[0.02em] capitalize font-montserrat text-white text-center">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
