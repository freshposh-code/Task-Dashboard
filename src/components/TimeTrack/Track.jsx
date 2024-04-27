import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { data, lineData, times } from '../../../Utils/Data'
import { profile, profileII } from '../../assets';
import { ChevronRight, PlayArrow } from '@mui/icons-material';

const Track = () => {
    return (
        <section className="mt-14 md:flex hidden xm:gap-10 gap-16">
            <div className='stats sm:w-[50%] w-full p-7 rounded-xl'>
                <h1 className='font-bold text-xl'>Spent time</h1>
                <ResponsiveContainer width="100%" height={210}>
                    <LineChart data={data}>
                        <XAxis dataKey="day" />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        {/* Simple line chart */}
                        <Line type="monotone" dataKey="time" stroke="#ff0000" />

                        {/* Area chart with background color */}
                        <AreaChart data={data}>
                            <Area type="monotone" dataKey="time" stroke="#ff0000" fill="#ff0000ce" />
                        </AreaChart>
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className='stats sm:w-[50%] w-full p-7 rounded-xl'>
                <div className='flex gap-5 items-center'>
                    <div>
                        <img className='object-fill sm:w-12 w-9 sm:h-12 h-9 rounded-full' src={profileII} alt="profile" />
                    </div>
                    <div>
                        <h1 className='text-lg font-bold'>Lilly Donovan</h1>
                        <p className='text-gray-300 text-sm font-semibold'>Business trainer</p>
                    </div>
                </div>
                <p className='font-bold py-4 sm:text-lg text-base'>How to properly manage your <br className="sm:flex hidden" /> personal budget?</p>
                <div className='flex items-center py-2 sm:gap-10 gap-4'>
                    {times.map((item) => (
                        <div className='flex items-center gap-2' key={item.text}>
                            <div>
                                <span className='icon'>{item.icon}</span>
                            </div>
                            <div>
                                <p className='font-semibold sm:text-base xm:text-xs text-[8px]'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between items-center py-2'>
                    <p className='font-semibold sm:text-base text-xs'>5 days ago</p>
                    <div className='flex items-center sm:gap-6 gap-4 text-white bg-[#2e25ae] sm:px-5 px-3 sm:py-4 py-2 rounded-[33px] font-semibold'>
                        <p className='sm:text-base text-xs'>Connect</p>
                        <ChevronRight />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Track