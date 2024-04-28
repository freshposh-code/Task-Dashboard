import React from 'react'
import { easeQuadInOut } from 'd3-ease';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from '../../../Utils/AnimateProvider';
import { Add, DriveFileRenameOutline, MoreHoriz } from '@mui/icons-material';
import { credit } from '../../assets';
import { transaction } from '../../../Utils/Data';
import ChangingProgressProvider from '../../../Utils/AnimateProvider/ProgressiveProvider';

const Transaction = () => {
    return (
        <section className="md:flex hidden">
            <div className='bg-[#0537ff0f] mt-12 rounded-2xl'>

                <span className='float-right pt-7 p-10 text-[#cfcfcf]'>
                    <DriveFileRenameOutline className='text-[#0537ff30]' style={{ fontSize: '19px' }} />
                </span>


                <div className="relative pt-24">
                    <div className='w-40 m-auto flex justify-center items-center font-bold'>
                        <ChangingProgressProvider values={[0, 100]}>

                            {percentage => (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    strokeWidth={2}
                                    background
                                    backgroundPadding={0}
                                    styles={buildStyles({

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
                    </div>

                    <p className='bg-[#2e25ae] text-white font-semibold text-center rounded-lg absolute top-[5.3rem] sm:-right-5 -right-5 text-xs px-5 py-3 shadow-lg shadow-gray-400'>$10,600</p>
                </div>

                <div className="pt-9 px-6">
                    <div>
                        <div className='flex justify-between'>
                            <p className='font-bold text-xl'>My card</p>
                            <MoreHoriz className='cursor-pointer' />
                        </div>

                        <div>
                            <img className=' w-[500px] h-[268px] object-cover' src={credit} alt="creditcard" />
                        </div>

                        <div className='flex justify-between items-center'>
                            <h1 className='font-bold text-xl'>Transaction</h1>
                            <Add className='text-[#fff] bg-[#ff0000ce]' style={{ padding: '8px', fontSize: '2.5rem', borderRadius: '10px' }} />
                        </div>

                        <div>
                            {transaction.map((item) => (
                                <div className="flex gap-5 items-center py-5" key={item.head}>
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