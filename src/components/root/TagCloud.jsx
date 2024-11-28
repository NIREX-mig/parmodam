import React from 'react'

const TagCloud = () => {
    return (
        <div className="bg-white py-10">
            <h2 className="text-3xl font-bold mb-5 text-center">Tag Cloud</h2>
            <div className='pt-6 flex gap-3 flex-wrap'>
                {[1, 2, 3, 4, 5].map((tag, index) => {
                    return <p key={index} className='text-white py-2 px-4 uppercase bg-[#93A094] inline text-sm'>Travel</p>
                })

                }
            </div>
        </div>
    )
}

export default TagCloud