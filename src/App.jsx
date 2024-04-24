import React from 'react'
import { Sidebar, Topbar } from './components'

const App = () => {
  return (
    <section className='flex m-2 items-baseline'>
      <div>
        <Sidebar />
      </div>
      <Topbar />
    </section>
  )
}

export default App