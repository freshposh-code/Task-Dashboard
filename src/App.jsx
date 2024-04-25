import React from 'react'
import { Chart, Sidebar, Stats, TimeTrack, Topbar, Transaction } from './components'

const App = () => {
  return (
    <section className='flex items-start sm:m-2 m-0'>
      <div>
        <Sidebar />
      </div>
      <div className="flex">
        <div className='flex flex-col sm:px-14 px-6 p-5'>
          <Topbar />
          <div className="flex items-start gap-10">
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
  )
}

export default App