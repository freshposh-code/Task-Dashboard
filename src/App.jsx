import React from 'react'
import { Chart, MobileNav, Sidebar, Stats, TimeTrack, Topbar, Transaction } from './components'

const App = () => {
  return (
    <>
      <section className='flex items-start sm:m-2 m-0'>
        <div className="absolute bottom-0">
          {/* <MobileNav /> */}
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
    </>
  )
}

export default App