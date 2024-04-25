import React from 'react'
import { Sidebar, Stats, Topbar } from './components'

const App = () => {
  return (
    <section className='flex items-start sm:m-2 m-0'>
      <div>
        <Sidebar />
      </div>
      <div className='flex flex-col sm:px-14 px-6 p-5'>
        <Topbar />
        <div>
          <Stats />
        </div>
      </div>
    </section>
  )
}

export default App