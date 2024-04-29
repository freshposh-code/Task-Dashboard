import React from 'react'
import { Chart, MobileNav, Sidebar, Stats, SwitchTab, SwitchTabII, TimeTrack, Topbar, Transaction } from './components'
import { useSetState } from './Context/StateContext';
import { CreditCardFilled, SignalFilled } from '@ant-design/icons';

const App = () => {
  const { isSection1Active, handleSectionToggle } = useSetState();
  return (
    <>
      <section className='flex items-start sm:m-2 m-0'>
        <div className="bottom-0 z-20 fixed">
          <MobileNav />
        </div>
        <div>
          <Sidebar />
        </div>
        <div className="flex">
          <div className='flex flex-col px-12 p-5'>
            <Topbar />
            <div className="flex items-start sm:gap-7 xm:gap-1 gap-0">
              <div>
                <Stats />
                <Chart />
                <TimeTrack />
              </div>
              <div>
                <Transaction />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE VIEW / MOBILE SWITCH CASE */}

      <div className="flex-col justify-center text-center md:hidden flex pb-28">
        {/* Icons for toggling sections */}
        <div className="flex space-x-12 my-8 justify-center w-fit m-auto rounded-[25px] shadow-lg">
          <SignalFilled style={{ fontSize: '1.5rem' }} className={`rounded-[10px] px-7 py-4 bg-[#00bbffd4] duration-500 ${isSection1Active ? 'text-white' : "bg-white text-gray-500"}`} onClick={handleSectionToggle} />
          <CreditCardFilled style={{ fontSize: '1.5rem' }} className={`rounded-[10px] px-7 py-4 bg-[#00bbffd4] duration-500 ${isSection1Active ? "bg-white text-gray-500" : 'text-white'}`} onClick={handleSectionToggle} />
        </div>

        {/* Render section based on active state */}

        {isSection1Active ? <SwitchTab /> :
          <div className='bg-[#0537ff08]'>
            <SwitchTabII />
          </div>
        }
      </div>
    </>
  )
}

export default App