import React from 'react'
import { Link } from 'react-router-dom'

export const HostelNavbar = () => {
  return (
    <>
        <nav className=' w-full top-0 fixed bg-violet-300  h-12 flex justify-end  space-x-5 items-center px-10 '>
            <p>Sant kabir Das</p>
                <img src="gb.png" className='w-8 h-8' alt='' />
                
            </nav>
            <div className=' flex px-10 space-x-5 top-5 fixed'>
            <Link to="/hostel">
            <div className='w-44 h-11 bg-green-400 rounded-md'><button className=' w-full h-10 bg-slate-100 rounded-md hover:bg-green-400'>Dashboard</button></div>
            </Link>
            <Link to="/hostel/database">
            <div className='w-44 h-11 bg-blue-400 rounded-md'><button className=' w-full h-10 bg-slate-100 rounded-md hover:bg-blue-400'>List of Students</button></div>
            </Link>
            <Link to="/hostel/complaints">
            <div className='w-44 h-11 bg-yellow-400 rounded-md'><button className=' w-full h-10 bg-slate-100 rounded-md hover:bg-yellow-400'>Complaints</button></div>
            </Link>
            <Link to="/hostel/notice">
            <div className='w-44 h-11 bg-cyan-400 rounded-md'><button className=' w-full h-10 bg-slate-100 rounded-md hover:bg-cyan-400'>Notices</button></div>
            </Link>
            </div>
    </>
  )
}
