import { useState } from 'react'

import { Route, Routes,useLocation } from 'react-router-dom'
import DashboardPages from './pages/DashboardPages'
import ProfilePages from './pages/ProfilePages'
import OrganisasiPages from './pages/OrganisasiPages'

import Sidebar from './components/Sidebar'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  console.log(location)
  console.log("pathname: " + location.pathname)
  console.log(location)
  return (
      <div className='flex h-screen bg-gray-800 text-gray-100 overflow-hidden' >

        <div className='fixed inset-0 z-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80'></div>
          <div className='absolute inset-0 backdrop-blur-sm'></div>
        </div>    
        <Sidebar></Sidebar>
        <div className="flex-1 overflow-auto relative z-10 bg-gray-800">
          <Header title={ location.pathname == '/'? 'Dashboard' : location.pathname.split('/')}></Header>  
        <Routes >
          <Route path='/' element={<DashboardPages></DashboardPages>}></Route>
          <Route path='/Dashboard' element={<DashboardPages></DashboardPages>}></Route>
          <Route path='/Profile' element={<ProfilePages></ProfilePages>}></Route>
          <Route path='/Organisasi' element={<OrganisasiPages></OrganisasiPages>}></Route>
        </Routes>
        </div>
      </div>
  )
}

export default App
