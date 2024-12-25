import React from 'react'

const TagCloud = ({ tags }) => {
    return (
        <div className="bg-white py-10">
            <h2 className="text-3xl font-bold mb-5 text-center">Tag Cloud</h2>
            {tags?.length === 0 ? <p className='text-white py-2 px-4 uppercase bg-[#93A094] inline text-sm'>NO Tag</p> :
                <div className='pt-6 flex gap-3 flex-wrap'>
                    {tags.map((tag, index) => {
                        return <p key={index} className='text-white py-2 px-4 uppercase bg-[#93A094] inline text-sm'>{tag}</p>
                    })
                    }
                </div>
            }
        </div>
    )
}

export default TagCloud