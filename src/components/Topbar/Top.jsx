import React from 'react'
import { topContent } from '../../../Utils/Data'
import { Notifications, Search } from '@mui/icons-material'
import { profile } from '../../assets'

const Top = () => {
    return (
        <section className='flex items-center gap-14'>
            <div className='relative md:flex hidden'>
                <div className='flex items-center border bg-[#0537ff0f] rounded-[20px]'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-[#432eabc3]' />
                    <input type="text" placeholder='Search' className='border-none bg-[#0537ff08] outline-none w-[35rem] pl-10 py-3 rounded-[20px] text-sm' />
                </div>
            </div>

            <div className='flex items-center sm:gap-64 gap-10'>
                <div className='md:flex hidden'>
                    {topContent.map((item, index) => (
                        <div key={item.link} className={`${item !== index.length - 1 ? 'mr-10' : 'mr-0'}`}>
                            <li className='font-bold'>{item.link}</li>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between items-center">
                    <div className='md:hidden flex'>
                        <h1>logo</h1>
                    </div>

                    <div className='flex gap-3 items-center'>
                        <div className='relative'>
                            <Notifications className='text-[#cfcfcf]' />

                            <div className="w-[5px] h-[5px] rounded-full bg-[#f00] absolute top-1 right-1" />
                        </div>
                        <img className='object-cover sm:w-12 w-9 sm:h-12 h-9 rounded-full' src={profile} alt="profile" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Top