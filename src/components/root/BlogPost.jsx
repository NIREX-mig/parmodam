"use client";

import React from 'react'
import VerticalCard from './VerticalCard'

const BlogPost = () => {
    return (
        <section className='md:px-24 px-3 py-10'>
            <div className='md:px-10 grid md:grid-cols-3 mx-auto md:gap-x-10 gap-x-5 gap-y-5 md:gap-y-5'>
                {[1, 2, 3, 4, 5, 6].map((data, index) => {
                    return <VerticalCard key={index} />
                })}
            </div>
        </section>
    )
}

export default BlogPost