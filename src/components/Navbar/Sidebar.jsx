import React, { useState } from 'react'
import { sidebarIcons } from '../../../Utils/Data'

const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <section className='md:flex hidden bg-[#2e25ae] rounded-tl-[40px] rounded-bl-[40px] max-w-fit p-5 h-[62.8rem] flex-col items-center gap-[17rem]'>
                <div>
                    <span className='text-white'>LOGO</span>
                </div>

                <div>
                    {sidebarIcons.map((item, index) => (
                        <div key={item.icon}
                            onClick={() => handleClick(index)}
                            className={`cursor-pointer duration-500 ${activeIndex === index ? 'bg-white text-[#ff0000ce] sideshadow' : 'text-[#7e75ff]'} my-10 p-4 rounded-xl font-extrabold`}>
                            <span>{item.icon}</span>
                        </div>
                    ))}
                </div>
            </section>

        </>
    )
}

export default Sidebar