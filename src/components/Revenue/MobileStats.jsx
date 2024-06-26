import React from 'react'
import { stats } from '../../../Utils/Data'
import { useSetState } from '../../Context/StateContext';

const MobileStats = () => {
    const { activeItem, handleClickItem } = useSetState();
    return (
        <section className='flex flex-wrap justify-center items-center mt-3 gap-6'>
            {stats.map((item, index) => (
                <div key={item.text} onClick={() => handleClickItem(index)} className={`flex gap-5 stats px-10 py-10 rounded-xl cursor-pointer duration-500 flex-col-reverse ${activeItem === index ? 'bg-[#ff0000ce] text-white' : ''}`}>
                    <span className={`${activeItem === index ? "text-white" : "text-[#2e25ae]"}`}>{item.icon}</span>
                    <div>
                        <p className='text-xs font-bold text-gray-300'>{item.text}</p>
                        <h1 className={`font-extrabold text-2xl ${activeItem === index ? "text-white" : "text-[#2e25ae]"}`}>{item.number}</h1>
                    </div>
                </div>
            ))}
        </section>
    )
}

export default MobileStats