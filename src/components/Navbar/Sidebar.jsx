import React from 'react'
import { sidebarIcons } from '../../../Utils/Data'
import { useSetState } from '../../Context/StateContext'

const Sidebar = () => {
    const { activeIndex, handleClick } = useSetState();

    return (
        <>
            <section className='md:flex hidden bg-[#2e25ae] rounded-tl-[40px] rounded-bl-[40px] max-w-fit p-5 h-[63rem] flex-col items-center gap-[11rem]'>
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