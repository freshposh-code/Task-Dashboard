import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { areaData, lineData, times, weekday } from '../../../Utils/Data'
import { profile, profileII } from '../../assets';
import { ChevronRight, PlayArrow } from '@mui/icons-material';

const MobileTrack = () => {
    const [activeDate, setActiveDate] = useState(5);

    const handleCurrentdate = (index) => {
        setActiveDate(index)
    }
    return (
        <section className="m-5 flex flex-col items-center gap-5">
            <h1 className='font-bold text-xl text-left'>Spent time</h1>
            <div className='stats sm:w-[50%] w-full p-1 rounded-xl'>
                <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={lineData}>
                        <Tooltip />
                        <Line type="monotone" dataKey="pv" stroke="#ff0000ce" strokeWidth={3} activeDot={{ r: 8 }} />

                    </LineChart>
                </ResponsiveContainer>

                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2000 320"><path fill="#0537ff0f" fill-opacity="1" d="M0,256L20,261.3C40,267,80,277,120,266.7C160,256,200,224,240,197.3C280,171,320,149,360,165.3C400,181,440,235,480,234.7C520,235,560,181,600,186.7C640,192,680,256,720,256C760,256,800,192,840,149.3C880,107,920,85,960,64C1000,43,1040,21,1080,26.7C1120,32,1160,64,1200,74.7C1240,85,1280,75,1320,64C1360,53,1400,43,1420,37.3L1440,32L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg> */}
                <div className='flex justify-center md:gap-6 gap-3 cursor-pointer py-7 text-center'>
                    {weekday.map((item, index) => (
                        <div className='text-center' onClick={() => handleCurrentdate(index)}>
                            <h1 className={`${activeDate === index ? "text-[#ff0000ce]" : "text-gray-300"} font-semibold`}>{item.day}</h1>
                        </div>
                    ))}
                </div>
            </div>

            <div className='stats md:w-[50%] w-full md:p-2 sm:p-8 p-2 rounded-xl'>
                <div className='flex gap-5 items-center'>
                    <div>
                        <img className='object-fill sm:w-12 w-9 sm:h-12 h-9 rounded-full' src={profileII} alt="profile" />
                    </div>
                    <div className='flex flex-col items-baseline'>
                        <h1 className='xm:text-lg text-sm font-bold'>Lilly Donovan</h1>
                        <p className='text-gray-300 xm:text-sm text-xs font-semibold'>Business trainer</p>
                    </div>
                </div>
                <p className='text-start font-bold py-4 xm:text-lg text-sm'>How to properly manage your <br className="md:flex hidden" /> personal budget?</p>
                <div className='flex items-center md:justify-center justify-normal py-2 sm:gap-10 gap-4'>
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
                    <div className='flex items-center text-white bg-[#2e25ae] px-2 py-2 rounded-[33px] font-semibold'>
                        <p className='xm:text-base text-xs'>Connect</p>
                        <ChevronRight />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MobileTrack