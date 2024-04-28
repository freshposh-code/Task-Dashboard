import React from 'react'
import { easeQuadInOut } from 'd3-ease';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from '../../../Utils/AnimateProvider';
import { Add, DriveFileRenameOutline, MoreHoriz } from '@mui/icons-material';
import { credit } from '../../assets';
import { transaction } from '../../../Utils/Data';
import ChangingProgressProvider from '../../../Utils/AnimateProvider/ProgressiveProvider';

const MobileTransaction = () => {
    return (
        <section className='m-5'>
            <h1 className='font-bold xm:text-2xl text-xl text-center'>Total Sales</h1>
            <div className='rounded-2xl'>

                <div className="relative pt-14">
                    <div className='relativw w-40 m-auto font-bold'>
                        <ChangingProgressProvider>

                            {percentage => (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    strokeWidth={2}
                                    background
                                    backgroundPadding={0}
                                    styles={buildStyles({
                                        pathTransition: "none",

                                        // rotation: 0.25,

                                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                        strokeLinecap: 'round',


                                        // Text size
                                        textSize: '20px',

                                        // Colors
                                        pathColor: `#2e25ae`,
                                        textColor: '#2e25ae',
                                        trailColor: '#fff',
                                        backgroundColor: '#fff',

                                    })}
                                />
                            )}
                        </ChangingProgressProvider>
                        <p className='bg-[#2e25ae] text-white font-semibold text-center rounded-lg absolute top-[2rem] -right-4 text-xs px-5 py-3 shadow-lg shadow-gray-400'>$10,600</p>
                    </div>

                </div>

                <div className="sm:p-8 xm:p-4 p-3">
                    <div>
                        <div className='flex justify-between'>
                            <p className='font-bold text-xl'>My card</p>
                            <MoreHoriz className='cursor-pointer' />
                        </div>

                        <div>
                            <img className='xm:h-[300px] h-[200px] m-auto object-cover' src={credit} alt="creditcard" />
                        </div>

                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold text-xl'>Transaction</h1>
                            <Add className='text-[#fff] bg-[#ff0000ce]' style={{ padding: '8px', fontSize: '2.5rem', borderRadius: '10px' }} />
                        </div>

                        <div className='items-center mt-10'>
                            {transaction.map((item) => (
                                <div className="flex gap-5 items-center mt-5" key={item.head}>
                                    <div>
                                        <span>{item.icon}</span>
                                    </div>
                                    <div className="flex items-center justify-between w-full">
                                        <div>
                                            <h1 className='text-base font-bold'>{item.head}</h1>
                                            <p className='text-sm text-gray-400'>{item.time}</p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <h1 className='font-bold'>{item.amount}</h1>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MobileTransaction;