import React from 'react'
import { Chart, MobileNav, Sidebar, Stats, SwitchTab, SwitchTabII, TimeTrack, Topbar, Transaction } from './components'
import { CreditCard, } from '@mui/icons-material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { useSetState } from './Context/StateContext';

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

      <div className="flex-col justify-center text-center md:hidden flex mb-28">
        {/* Icons for toggling sections */}
        <div className="flex space-x-4 my-8 justify-center">
          <SignalCellularAltIcon onClick={handleSectionToggle} />
          <CreditCard onClick={handleSectionToggle} />
        </div>

        {/* Render section based on active state */}

        {isSection1Active ? <SwitchTab /> :
          <div className='bg-[#cfd8ff2f]'>
            <SwitchTabII />
          </div>
        }
      </div>
    </>
  )
}

export default App