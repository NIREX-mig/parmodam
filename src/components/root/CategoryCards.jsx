"use client";

import Image from 'next/image';
import React from 'react'
import img1 from "@/public/assets/category/1.jpg"
import img2 from "@/public/assets/category/2.jpg"
import img3 from "@/public/assets/category/3.jpg"
import img4 from "@/public/assets/category/4.jpg"

const CategoryCards = () => {
    return (
        <div className="featured_category bg_image_1" data-aos="fade-up" data-aos-duration="700">
            <div className="px-24">
                <div className="flex gap-8 mx-auto">
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <div className="featured_category_item" data-aos="fade-up" data-aos-duration="600">
                            <Image src={img1} alt="img" width={100} height={100} />
                            <div className="featured_category_info">
                                <h6 className="featured_category_heading"><a href="#">Travel & Advanture</a></h6>
                                <p className="featured_category_number"><span>06</span> Posts</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <div className="featured_category_item" data-aos="fade-up" data-aos-duration="800">
                            <Image src={img2} alt="img" width={100} height={100} />
                            <div className="featured_category_info">
                                <h6 className="featured_category_heading"><a href="#">Road Trip</a></h6>
                                <p className="featured_category_number"><span>12</span> Posts</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <div className="featured_category_item" data-aos="fade-up" data-aos-duration="1000">
                            <Image src={img3} alt="img" width={100} height={100} />
                            <div className="featured_category_info">
                                <h6 className="featured_category_heading"><a href="#">Camping Trip</a></h6>
                                <p className="featured_category_number"><span>09</span> Posts</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4">
                        <div className="featured_category_item" data-aos="fade-up" data-aos-duration="1200">
                            <Image src={img4} alt="img" width={100} height={100} />
                            <div className="featured_category_info">
                                <h6 className="featured_category_heading"><a href="#">Travel Photography</a></h6>
                                <p className="featured_category_number"><span>16</span> Posts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCards