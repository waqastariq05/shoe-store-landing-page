import React from 'react'
import HeroSection from './HeroSection'
import Card from './Card'
import { Link } from 'react-router-dom'

const Home = () => {
    const data = [<Card />, <Card />, <Card />, <Card />, <Card />, <Card />]
    return (
        <>
            <HeroSection />
            <div className="w-[1183px] pb-5 text-5xl mx-auto">
                <h2 className="text-[32px] tracking-[0.02em] uppercase font-roboto">
                    Products
                </h2>
                <div className="w-[1180px] flex items-center justify-between gap-y-14 flex-wrap">
                    {data.map((card, index) => {
                        return (
                            <div key={index}>
                                <Link to={`/product/${index + 1}`} >{card}</Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Home
