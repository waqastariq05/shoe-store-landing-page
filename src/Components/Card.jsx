import React, { useContext, useState } from 'react'
import cardImage from '../assets/Card_image.png'
import { CartContext } from '../CartContext'

const Card = ({ data }) => {
    const { cart, setCart } = useContext(CartContext)
    const [loading, setLoading] = useState(false)

    const handleClick = (e, id) => {
        const _Cart = { ...cart }
        setLoading(true)
        if (!_Cart.items) {
            _Cart.items = {}
        }
        if (_Cart.items[id]) {
            _Cart.items[id] += 1
        }
        else {
            _Cart.items[id] = 1
        }
        if (!_Cart.totalItems) {
            _Cart.totalItems = 0
        }
        _Cart.totalItems += 1
        setCart(_Cart)
    }

    setTimeout(() => {
        setLoading(false)
    }, 1000)

    return (
        <>
            <div className="w-[350px] h-[438px] text-center rounded-3xs bg-white">
                <img
                    className="w-[313.4px] h-56 object-cover rounded-3xs pt-5"
                    alt=""
                    src={cardImage}
                />
                <div className=''>
                    <h2 className="tracking-[0.01em] mb-5 capitalize font-semibold">Nike Sneakers</h2>
                    <div className='w-[300px] h-[2px] rounded-md bg-[#444444] mb-6 mx-auto' />
                    <div className='flex items-center justify-between w-[300px] h-[33px] text-center mx-auto'>
                        <div className="text-xl tracking-[0.02em] capitalize font-semibold">
                            Rs. 1500
                        </div>
                        <button className="cursor-pointer [border:none] p-0 w-40 h-[47px] rounded-3xs bg-deeppink text-base tracking-[0.02em] capitalize font-montserrat text-white text-center" onClick={(e) => (handleClick(e, data.id))}>
                            {loading ? "Added" : "Add to cart"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
