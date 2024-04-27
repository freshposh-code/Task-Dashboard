import React, { useState } from 'react'
import { Chart, MobileNav, Sidebar, Stats, SwitchTab, SwitchTabII, TimeTrack, Topbar, Transaction } from './components'
import { CreditCard, } from '@mui/icons-material';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const App = () => {
  const [isSection1Active, setIsSection1Active] = useState(true); // State to track active section

  const handleSectionToggle = () => {
    setIsSection1Active(!isSection1Active); // Toggle active section
  };
  return (
    <>
      <section className='flex items-start sm:m-2 m-0'>
        <div className="absolute bottom-0">
          <MobileNav />
        </div>
        <div>
          <Sidebar />
        </div>
        <div className="flex">
          <div className='flex flex-col sm:px-14 px-6 p-5'>
            <Topbar />
            <div className="flex items-start sm:gap-10 xm:gap-1 gap-0">
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

      <div className="flex-col justify-center text-center md:hidden flex">
        {/* Icons for toggling sections */}
        <div className="flex space-x-4 my-8 justify-center">
          <SignalCellularAltIcon onClick={handleSectionToggle} />
          <CreditCard onClick={handleSectionToggle} />
        </div>

        {/* Render section based on active state */}
        {isSection1Active ? <SwitchTab /> : <SwitchTabII />}
      </div>
    </>
  )
}

export default App