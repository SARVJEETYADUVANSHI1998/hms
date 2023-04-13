import React from 'react'
import {RxDashboard} from 'react-icons/rx'
import {BiNotepad} from 'react-icons/bi'
import {BsDatabase} from 'react-icons/bs'
import {HiOutlineLogout} from 'react-icons/hi'
import {AiOutlineHome} from 'react-icons/ai'
import { Link, NavLink } from 'react-router-dom'
export const AdminSidebar = () => {
  return (
    <div className=' w-44 px-5 pt-2 h-full border-r-2  '>
            <div className=' w-full space-y-4 flex flex-col justify-center items-center'>
            <img src="gb.png" className='w-8 h-8' alt='' />
            <p className=' font-bold  text-lg'>Admin</p>
            </div>
            <div className=' w-full  flex flex-col mt-20 space-y-5'>
            <Link to="/admin">
            <div className=' flex space-x-4 items-center hover:bg-slate-200 rounded-lg pl-3 h-10'>
                <RxDashboard size={20}/>
                
                <p>Dashboard</p>
            </div>
            </Link>
            <NavLink to="/admin/notice">
            <div className=' flex space-x-4 items-center hover:bg-slate-200 rounded-lg pl-3 h-10'>
                
                <BiNotepad size={20}/>
                <p>Notice</p>
            </div>
            </NavLink>
            <Link to="/admin/database" className=' no-underline'>
            <div className=' flex space-x-4 items-center hover:bg-slate-200 rounded-lg pl-3 h-10'>
                
                <BsDatabase size={20}/>
                <p>Database</p>
            </div>
            </Link>
            <div className=' flex space-x-4 items-center hover:bg-slate-200 rounded-lg pl-3 h-10'>
                <AiOutlineHome size={20}/>
                
                <p>Hostel</p>
            </div>
            <div className=' flex space-x-4 items-center hover:bg-slate-200 rounded-lg pl-3 h-10'>
                <HiOutlineLogout size={20}/>
                
                <p>Logout</p>
            </div>
             
            </div>

            
           
            
            
        </div>
  )
}
