import React from 'react'
import { sidebarIcons } from '../../../Utils/Data'
import { useSetState } from '../../Context/StateContext';

const MobileNav = () => {
    const { activeIndex, handleClick } = useSetState();
    return (
        <>
            {/* // MOBILE RESPONSIVENESS//VIEW */}
            <section className='w-screen'>
                <div className='md:hidden flex bg-[#2e25ae] xm:p-3 p-2 rounded-[40px]'>

                    <div className='relative flex justify-around w-screen'>
                        {sidebarIcons.map((item, index) => (
                            <div key={item.icon}
                                onClick={() => handleClick(index)}
                                className={`cursor-pointer rounded-[15px] ${activeIndex === index ? 'bg-white text-[#ff0000ce] sideshadow absolute left-[1rem] -top-[90%] transform -translate-x-[21px]' : 'text-[#7e75ff]'} p-3`}>
                                <div>{item.icon}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MobileNav