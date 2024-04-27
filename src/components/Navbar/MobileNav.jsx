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
            <section>
                <div className='bg-[#2e25ae] xm:p-3 p-2 w-screen ss:hidden flex items-end rounded-[40px]'>

                    <div className='flex w-screen justify-between sm:px-10 xm:px-7 px-2'>
                        {sidebarIcons.map((item, index) => (
                            <div key={item.icon}
                                onClick={() => handleClick(index)}
                                className={`cursor-pointer rounded-[15px] ${activeIndex === index ? 'bg-white text-[#ff0000ce] sideshadow' : 'text-[#7e75ff]'} p-3`}>
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