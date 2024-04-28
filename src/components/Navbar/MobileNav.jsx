import React, { useState } from 'react'
import { sidebarIcons } from '../../../Utils/Data'

const MobileNav = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };
    return (
        <>
            {/* // MOBILE RESPONSIVENESS//VIEW */}
            <section className='w-screen'>
                <div className='md:hidden flex bg-[#2e25ae] xm:p-3 p-2 items-end rounded-[40px]'>

                    <div className='relative flex '>
                        {sidebarIcons.map((item, index) => (
                            <div key={item.icon}
                                onClick={() => handleClick(index)}
                                className={`cursor-pointer rounded-[15px] ${activeIndex === index ? 'bg-white text-[#ff0000ce] sideshadow absolute left-[1rem] -top-[90%] transform -translate-x-[21px]' : 'text-[#7e75ff]'} p-3`}>
                                <span>{item.icon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MobileNav