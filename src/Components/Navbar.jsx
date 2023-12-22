import React from 'react'
import logo from '../assets/image 1.png'
import cartIcon from '../assets/Vector.png'

const Navbar = () => {
    return (
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-auto w-[1180px] h-[105px] font-roboto">
            <img
                className="w-[209px] h-24 object-cover"
                alt=""
                src={logo}
            />
            <nav className="flex items-center gap-5 tracking-[0.02em] uppercase font-medium w-[430px] text-black text-base">
                <a href="" className='no-underline text-base text-black'>Home</a>
                <a href="" className='no-underline text-base text-black'>About</a>
                <a href="" className='no-underline text-base text-black'>Products</a>
                <a href="" className='no-underline text-base text-black'>Contact</a>
            </nav>
            <div className="rounded-xl bg-deeppink w-[88px] h-[40px] text-white flex items-center justify-center gap-2">
                <b className="tracking-[0.02em] uppercase">
                    10
                </b>
                <img
                    className="h-[47.62%] w-[20.45%] max-w-full overflow-hidden max-h-full object-cover"
                    alt=""
                    src={cartIcon}
                />
            </div>
        </div>
    )
}

export default Navbar
