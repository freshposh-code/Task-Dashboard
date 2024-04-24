import React from 'react'
import { topContent } from '../../../Utils/Data'
import { Notifications, Search } from '@mui/icons-material'
import { profile } from '../../assets'

const Top = () => {
    return (
        <section className='p-5 items-baseline gap-14 md:flex hidden'>
            <div className='relative'>
                <div className='flex items-center border bg-[#0537ff0f] rounded-[20px]'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#432eabc3]' />
                    <input type="text" placeholder='Search' className='border-none bg-[#0537ff0f] outline-none w-[35rem] pl-10 py-3 rounded-[20px] text-sm' />
                </div>
            </div>

            <div className='flex gap-64'>
                <div className='flex'>
                    {topContent.map((item, index) => (
                        <div key={item.link} className={`${item !== index.length - 1 ? 'mr-10' : 'mr-0'}`}>
                            <li className='font-bold'>{item.link}</li>
                        </div>
                    ))}
                </div>
                <div className='flex gap-2'>
                    <div className='relative'>
                        <Notifications style={{ color: 'grey' }} />

                        <div className="w-[5px] h-[5px] rounded-full bg-[#f00] absolute top-1 right-1" />
                    </div>
                    <img className='object-cover w-12 h-12 rounded-full' src={profile} alt="profile" />
                </div>
            </div>

        </section>
    )
}

export default Top