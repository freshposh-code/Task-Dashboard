import React from 'react'
import { easeQuadInOut } from 'd3-ease';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from '../../../Utils/AnimateProvider';
import { Add, DriveFileRenameOutline, MoreHoriz } from '@mui/icons-material';
import { credit } from '../../assets';
import { transaction } from '../../../Utils/Data';

const Transaction = () => {
    return (
        <section className="md:flex hidden">
            <div className='bg-[#0537ff0f] mt-12 rounded-2xl'>

                <span className='float-right p-7 text-[#cfcfcf]'>
                    <DriveFileRenameOutline className='text-[#0537ff30]' style={{ fontSize: '19px' }} />
                </span>


                <div className="relative px-24 pt-20">
                    <div className='sm:w-40 w-28 flex justify-center items-center font-bold'>
                        <AnimatedProgressProvider
                            valueStart={10}
                            valueEnd={38}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                        >
                            {value => {
                                const roundedValue = Math.round(value);
                                return (
                                    <CircularProgressbar
                                        value={value}
                                        text={`${roundedValue}%`}
                                        /* This is important to include, because if you're fully managing the
                                  animation yourself, you'll want to disable the CSS animation. */
                                        styles={buildStyles({
                                            pathTransition: "none",

                                            // rotation: 0.25,

                                            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                            strokeLinecap: 'round',


                                            // Text size
                                            textSize: '17px',

                                            // Colors
                                            pathColor: `#2e25ae`,
                                            textColor: '#2e25ae',
                                            trailColor: '#fff',
                                            backgroundColor: '#fff',

                                        })}
                                    />
                                );
                            }}
                        </AnimatedProgressProvider>
                    </div>

                    <p className='bg-[#2e25ae] text-white font-semibold text-center rounded-lg absolute top-[4.5rem] sm:-right-7 -right-5 text-xs px-5 py-3 shadow-lg shadow-gray-400'>$10,600</p>
                </div>

                <div className="sm:p-8 xm:p-4 p-3">
                    <div>
                        <div className='flex justify-between'>
                            <p className='font-bold text-xl'>My card</p>
                            <MoreHoriz className='cursor-pointer' />
                        </div>

                        <div>
                            <img className='h-[300px] object-cover' src={credit} alt="creditcard" />
                        </div>

                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold text-xl'>Transaction</h1>
                            <Add className='text-[#fff] bg-[#ff0000ce]' style={{ padding: '8px', fontSize: '2.5rem', borderRadius: '10px' }} />
                        </div>

                        <div className='items-center mt-10'>
                            {transaction.map((item) => (
                                <div className="flex gap-5 items-center mt-5">
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

export default Transaction