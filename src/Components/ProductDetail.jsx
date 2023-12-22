import React from 'react'
import cardImage from '../assets/Card_image.png'
import solidStar from '../assets/solidStar.png'
import lightStar from '../assets/lightStar.png'

const ProductDetail = () => {
    return (
        <div className="flex items-center justify-between mx-auto w-[1050px] h-screen pt-16 rounded-3xs bg-rosybrown">
            <div className="w-[471px] h-[444px] flex items-center rounded-xl bg-white">
                <img
                    className="rounded-3xs w-[471px] h-[359.5px] object-cover"
                    alt=""
                    src={cardImage}
                />
            </div>

            <div className="w-[503px]">
                <h3 className="text-xl tracking-[0.02em] capitalize font-semibold font-roboto text-darkgray mb-1" style={{ lineHeight: 0 }}>
                    Nike Shoes
                </h3>
                <h2 className="tracking-[0.02em] capitalize font-semibold mb-3">
                    Nike Sneakers
                </h2>
                <div className="flex items-center gap-5 text-[14px] mb-8 text-darkslategray">
                    <div className='flex gap-1'>
                        <img
                            className="max-w-full overflow-hidden max-h-full object-cover"
                            alt=""
                            src={solidStar}
                        />
                        <img
                            className="max-w-full overflow-hidden max-h-full object-cover"
                            alt=""
                            src={solidStar}
                        />
                        <img
                            className="max-w-full overflow-hidden max-h-full object-cover"
                            alt=""
                            src={solidStar}
                        />
                        <img
                            className="max-w-full overflow-hidden max-h-full object-cover"
                            alt=""
                            src={solidStar}
                        />
                        <img
                            className="max-w-full overflow-hidden max-h-full object-cover"
                            alt=""
                            src={lightStar}
                        />
                    </div>
                    <div className="tracking-[0.02em] capitalize font-medium">
                        4 Reviews
                    </div>
                </div>
                <p className="text-base tracking-[0.02em] capitalize font-roboto text-darkslategray w-[483px] mb-10" style={{ lineHeight: '25px' }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book.
                </p>
                <div className='w-full h-[2px] bg-[#ddd] my-2' />
                <div className="w-[503px] h-16 text-5xl flex items-center justify-between">
                    <div className="tracking-[0.02em] capitalize font-semibold inline-block w-[110.6px] h-[27px]">
                        Rs. 1500
                    </div>
                    <button className="cursor-pointer [border:none] p-0 rounded-3xs bg-deeppink tracking-[0.02em] capitalize font-montserrat text-white text-center w-[161.2px] h-[50.3px] text-base font-semibold">
                        add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
