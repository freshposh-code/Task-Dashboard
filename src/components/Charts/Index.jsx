import React from 'react'
import { rangeData } from '../../../Utils/Data'
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts'

const Charts = () => {
    return (
        <section className='mt-14 bg-[#0537ff0f] p-7 rounded-2xl w-fit md:flex hidden flex-col'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-bold'>Statistics</h1>

                <select className='px-5 py-3 rounded-[33px]'>
                    <option>Year</option>
                    <option>Year</option>
                    <option>Year</option>
                    <option>Year</option>
                </select>
            </div>

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
                    dataKey="temperature"
                    fill="#2e25ae"
                    barSize={6}
                    radius={[10, 10, 10, 10]}
                />
            </BarChart>
        </section>
    )
}

export default Charts