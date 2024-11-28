"use client";

import Link from "next/link";

const CategoriesSection = () => {
    const categories = [
        { name: "Travel Hacks", count: 5 },
        { name: "South Asia", count: 7 },
        { name: "Travel Photography", count: 4 },
        { name: "Wildlife Adventure", count: 2 },
        { name: "Road Trips", count: 4 },
    ];

    return (
        <div className="bg-white py-10">
            <h2 className="text-3xl font-bold mb-5 text-center">Categories</h2>
            <div className="border-b border-dotted border-gray-300 mb-2 " />
            <ul className="space-y-2">
                {categories.map((category, index) => (
                    <Link
                        key={index}
                        href="#"
                        className=""
                    >
                        <li

                            className=" flex justify-between text-gray-700 border-b border-dotted border-gray-300 pb-2 hover:text-gladeGreen-500 cursor-pointer group mb-2"
                        >
                            <span>{category.name}</span>
                            <span className="text-gray-400 group-hover:text-gladeGreen-500 cursor-pointer">({category.count})</span>
                        </li>
                    </Link>
                ))}
            </ul>
            {/* <div className="border-b border-gray-200 mb-2 " /> */}
        </div>
    );
};

export default CategoriesSection;
