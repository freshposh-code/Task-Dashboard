import React from 'react'
import { Chart, MobileNav, Sidebar, Stats, SwitchTab, SwitchTabII, TimeTrack, Topbar, Transaction } from './components'
import { useSetState } from './Context/StateContext';
import { CreditCardFilled, SignalFilled } from '@ant-design/icons';

const App = () => {
  const { isSection1Active, handleSectionToggle } = useSetState();
  return (
    <>
      <section className={`flex items-start sm:p-2 p-0 ${isSection1Active ? "" : "bg-[#0537ff08]"}`}>
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

      <div className={`flex-col justify-center text-center md:hidden flex ${isSection1Active ? '' : 'bg-[#0537ff08]'}`}>
        {/* Icons for toggling sections */}
        <div className="flex my-3 justify-center w-fit m-auto rounded-[25px] shadow-lg">
          <SignalFilled className={`xm:text-[1.3rem] text-[1.1rem] rounded-[15px] px-9 py-4 bg-[#00bbffd4] duration-500 ${isSection1Active ? 'text-white' : "bg-white text-gray-500"}`} onClick={handleSectionToggle} />
          <CreditCardFilled className={`xm:text-[1.3rem] text-[1.1rem] rounded-[15px] px-9 py-4 bg-[#00bbffd4] duration-500 ${isSection1Active ? "bg-white text-gray-500" : 'text-white'}`} onClick={handleSectionToggle} />
        </div>

        {/* Render section based on active state */}

        {isSection1Active ?
          <div className="pb-28">
            <SwitchTab />
          </div>
          :
          <div className='bg-[0537ff08] pb-28'>
            <SwitchTabII />
          </div>
        }
      </div >
    </>
  )
}

export default App