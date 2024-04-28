import React, { useState } from 'react'
import { stats } from '../../../Utils/Data'

const Stats = () => {
    const [activeItem, setActiveItem] = useState(2)

    const handleClick = (index) => {
        setActiveItem(index)
    }
    return (
        <section className='mt-12 gap-11 md:flex hidden'>
            {stats.map((item, index) => (
                <div key={item.text} onClick={() => handleClick(index)} className={`flex gap-5 stats px-[4.7rem] py-8 rounded-xl cursor-pointer duration-500 ${activeItem === index ? 'bg-[#ff0000ce] text-white' : ''}`}>
                    <span>{item.icon}</span>
                    <div>
                        <p className='text-xs font-bold text-gray-300'>{item.text}</p>
                        <h1 className='font-bold text-2xl'>{item.number}</h1>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Stats