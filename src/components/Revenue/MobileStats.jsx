import React, { useState } from 'react'
import { stats } from '../../../Utils/Data'

const MobileStats = () => {
    const [activeItem, setActiveItem] = useState(2)

    const handleClick = (index) => {
        setActiveItem(index)
    }
    return (
        <section className='mt-3 grid grid-cols-2 justify-center gap-6 p-3'>
            {stats.map((item, index) => (
                <div key={item.text} onClick={() => handleClick(index)} className={`flex gap-5 stats px-16 py-8 rounded-xl cursor-pointer duration-500 flex-col-reverse ${activeItem === index ? 'bg-[#ff0000ce] text-white' : ''}`}>
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

export default MobileStats