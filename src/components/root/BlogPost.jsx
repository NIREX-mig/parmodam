"use client";

import React from 'react'
import VerticalCard from './VerticalCard'

const BlogPost = () => {
    return (
        <section className='px-24 py-10'>
            <div className='px-10 grid grid-cols-3 gap-x-10 gap-y-5'>
                {[1, 2, 3, 4, 5, 6].map((data, index) => {
                    return <VerticalCard key={index} />
                })}
            </div>
        </section>
    )
}

export default BlogPost