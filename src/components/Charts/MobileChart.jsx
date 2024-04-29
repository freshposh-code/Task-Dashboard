import React from 'react'
import { MobileRangeData, mobileBarAmount, mobileMonthDate, years } from '../../../Utils/Data'
import { Bar, BarChart, Tooltip, } from 'recharts'

const MobileChart = () => {
    return (
        <>
            <section>
                <div className='mt-12 justify-between items-center m-5 md:hidden flex'>
                    <h1 className='text-xl font-bold'>Statistics</h1>

                    {years.map((item) => (
                        <div key={item.year}>
                            <select className='px-5 py-3 rounded-[33px]'>
                                <option>{item.year}</option>
                                <option>{item.yearii}</option>
                                <option>{item.yeariii}</option>
                                <option>{item.yeariv}</option>
                            </select>
                        </div>
                    ))}
                </div>


                <div className='relative bg-[#0537ff0f] w-fit flex flex-col items-center justify-center m-auto rounded-2xl xm:p-5 p-0'>

                    <BarChart
                        width={300}
                        height={250}
                        data={MobileRangeData}
                        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    >
                        <Tooltip />
                        <Bar
                            dataKey="temperature"
                            fill="#2e25ae"
                            barSize={6}
                            radius={[10, 10, 10, 10]}
                        />
                    </BarChart>

                    <div className='flex px-10 xm:gap-[1.4rem] gap-[1.7rem]'>
                        {mobileMonthDate.map((item) => (
                            <div>
                                <h1 className='text-gray-300 font-semibold xm:text-base text-xs xm:mb-0 mb-'>{item.month}</h1>
                            </div>
                        ))}
                    </div>

                    <div className='absolute top-0 left-0 mt-8 ss:hidden flex flex-col p-3'>
                        {mobileBarAmount.map((item) => (
                            <div className='py-4' key={item.amount}>
                                <h1 className='text-gray-300 font-semibold xm:text-base text-xs'>{item.amount}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default MobileChart