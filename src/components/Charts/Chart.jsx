import React from 'react'
import { barAmount, monthDate, rangeData, years } from '../../../Utils/Data'
import { Bar, BarChart, Tooltip, YAxis } from 'recharts'

const Charts = () => {
    return (
        <section className='mt-10 bg-[#0537ff0f] p-7 rounded-2xl md:flex hidden flex-col'>
            <div className='flex justify-between items-center'>
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
            <div className="relative">
                <BarChart
                    width={835}
                    height={250}
                    data={rangeData}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                    {/* <XAxis dataKey="day" /> */}
                    <YAxis tickCount={''} />
                    <Tooltip />
                    <Bar
                        dataKey="amount"
                        fill="#2e25ae"
                        barSize={6}
                        radius={[10, 10, 10, 10]}
                    />
                </BarChart>

                <div className='flex px-20 gap-[4.5rem]'>
                    {monthDate.map((item) => (
                        <div>
                            <h1 className='text-gray-300 font-semibold'>{item.month}</h1>
                        </div>
                    ))}
                </div>


                <div className='absolute top-0 left-0 mt-4'>
                    {barAmount.map((item) => (
                        <div className='py-5' key={item.amount}>
                            <h1 className='text-gray-300 font-semibold'>{item.amount}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Charts
