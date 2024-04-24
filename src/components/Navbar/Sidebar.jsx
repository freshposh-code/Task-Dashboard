import React, { useState } from 'react'
import { sidebarIcons } from '../../../Utils/Data'

const Sidebar = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <>
            <section className='bg-[#2e25ae] rounded-tl-[40px] rounded-bl-[40px] max-w-fit p-5 h-screen sm:flex hidden flex-col items-center gap-20'>
                <div>
                    <span className='text-white'>LOGO</span>
                </div>

                <div>
                    {sidebarIcons.map((item, index) => (
                        <div key={item.icon}
                            onClick={() => handleClick(index)}
                            className={`cursor-pointer ${activeIndex === index ? 'bg-white text-red-500 sideshadow' : 'text-[#7e75ff] left-0'} my-5 p-4 rounded-xl font-extrabold`}>
                            <span>{item.icon}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* // MOBILE RESPONSIVENESS//VIEW */}

            <section>
                <div className='absolute bottom-0 bg-[#2e25ae] p-7 w-screen sm:hidden flex rounded-[50px]'>

                    <div className='flex justify-between'>
                        {sidebarIcons.map((item, index) => (
                            <div key={item.icon}
                                onClick={() => handleClick(index)}
                                className={`cursor-pointer ${activeIndex === index ? 'bg-white text-red-500 sideshadow' : 'text-[#7e75ff]'} p-3`}>
                                <span>{item.icon}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Sidebar