import React from 'react'
import { topContent } from '../../../Utils/Data'
import { Notifications, Search } from '@mui/icons-material'
import { profile } from '../../assets'

const Top = () => {
    return (
        <section className='flex items-center gap-12'>
            <div className='relative md:flex hidden'>
                <div className='flex items-center border bg-[#0537ff0f] rounded-[20px]'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#432eabc3]' />
                    <input type="text" placeholder='Search' className='border-none bg-[#0537ff08] outline-none w-[39rem] pl-10 py-3 rounded-[20px] text-sm' />
                </div>
            </div>

            <div className='flex items-center'>
                <div className='md:flex hidden'>
                    {topContent.map((item, index) => (
                        <div key={item.link} className={`${item !== index.length - 1 ? 'mr-[2.89rem]' : 'mr-0'}`}>
                            <li className='font-bold'>{item.link}</li>
                        </div>
                    ))}
                </div>

                <div className="relative flex items-center py-6">
                    <div className='md:hidden flex absolute left-0 px-5'>
                        <h1>logo</h1>
                    </div>

                    <div className='flex items-center md:gap-5 gap-4 sm:px-9 px-5'>
                        <div className='relative'>
                            <Notifications className='text-gray-300' />

                            <div className="w-[5px] h-[5px] rounded-full bg-[#f00] absolute top-1 right-1" />
                        </div>
                        <img className='object-cover sm:w-10 w-9 sm:h-10 h-9 rounded-xl' src={profile} alt="profile" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Top