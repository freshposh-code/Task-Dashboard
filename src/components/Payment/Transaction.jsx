import React from 'react'
import { easeQuadInOut } from 'd3-ease';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from '../../../Utils/AnimateProvider';
import { DriveFileRenameOutline, MoreHoriz } from '@mui/icons-material';

const Transaction = () => {
    return (
        <section className='bg-[#0537ff0f] mt-12 rounded-2xl'>

            <span className='float-right p-7 text-[#cfcfcf]'>
                <DriveFileRenameOutline style={{ fontSize: '19px' }} />
            </span>


            <div className="relative px-20 pt-20">
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
                                <CircularProgressbarWithChildren
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

                <p className='bg-[#2e25ae] text-white font-semibold text-center rounded-lg absolute top-[4.5rem] -right-7 text-xs px-4 py-3 shadow-lg shadow-gray-400'>$10,600</p>
            </div>

            <div className='flex justify-between p-5'>
                <p className='font-bold text-lg'>My card</p>
                <MoreHoriz />
            </div>

            <div>
                <img src="https://w7.pngwing.com/pngs/557/751/png-transparent-debit-card-visa-credit-card-brand-debit-card-label-debit-card-brand.png" alt="" />
            </div>
        </section>
    )
}

export default Transaction