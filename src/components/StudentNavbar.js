import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

export const StudentNavbar = () => {
  return (
    <div className=' w-full h-12 bg-cyan-400 flex items-center px-10 justify-between'>
        <GiHamburgerMenu size={30}/>
        <div className='flex w-1/5 justify-between items-center h-full'>
            <p className='text-md'>Welcome, Naman Chandra</p>
            <img className='w-8 h-8' src="gb.png"/>
        </div>
    </div>
  )
}
