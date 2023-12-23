import React, { useEffect, useState } from 'react'
import HeroSection from './HeroSection'
import Card from './Card'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const [products, setProducts] = useState([])

    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <HeroSection />
            <div className="w-[1183px] pb-5 text-5xl mx-auto">
                <h2 className="text-[32px] tracking-[0.02em] uppercase font-roboto">
                    Products
                </h2>
                <div className="w-[1180px] flex items-center justify-between gap-y-14 flex-wrap">
                    {products && products.map((data) => {
                        return (
                            <div key={data.id}>
                                <Card data={data} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home
