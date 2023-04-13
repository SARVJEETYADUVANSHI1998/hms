import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { StudentNavbar } from './StudentNavbar'
import { StudentSidebar } from './StudentSidebar'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineDoubleLeft} from 'react-icons/ai';
import {Complained} from './Complained';
import { Bookroom } from './bookRoom/Bookroom';
import MessCard from './Student/MessCard'
import { StudentNotice } from './Student/StudentNotice'

export const StudentDashboard = () => {
    const [open ,setOpen] = useState(false);
    const [active,setActive] = useState(0);
    let num=2;

  return (
    <div className='w-full h-screen'>
        
        <div className='  top-0 w-full h-12 bg-slate-300 flex items-center px-10 justify-between z-10'>
        <GiHamburgerMenu size={30} onClick={()=>setOpen(true)}/>
        <div className='flex w-1/5 justify-between items-center h-full'>
            <p className='text-md'>Welcome, Naman Chandra</p>
            <img className='w-8 h-8' src="gb.png"/>
        </div>
        </div>
    <div className={`bg-slate-300  fixed top-0 h-screen duration-500  w-1/5 ease-in-out  ${open?"left-0":"-left-1/4" }`}>
            <div className=' flex flex-col items-center justify-center space-y-4 py-5 '>
                <img src="gb.png" className=' w-12 h-12' />
                <p>Naman Chandra</p>
            </div>

            <hr className=' mx-5' />
            <div className=' flex-wrap flex items-center justify-center  gap-5 mt-5 h-3/5 overflow-y-scroll'>
                <div className=' hover:border-cyan-500 hover:border p-3 bg-slate-100   w-24 h-24  shadow-xl text-center rounded-lg' onClick={()=>setActive(1)}>
                
                    <img className='  rounded-lg object-fill w-full h-3/4' src="ROOM.png" />
                    <p className=' my-2 text-xs  '>Book Room </p>
                    
                </div>
                <div className=' hover:border-cyan-500 hover:border p-3 bg-slate-100  w-24 h-24   shadow-xl text-center rounded-lg'  onClick={()=>setActive(2)}>
                
                    <img className='  rounded-lg object-fill w-full h-3/4' src="COMPLAINT.jpg" />
                    <p className=' my-2 text-xs  '>Complaint </p>
                    
                </div>
                <div className=' hover:border-cyan-500 hover:border bg-slate-100  p-3 w-24 h-24   shadow-xl text-center rounded-lg'  onClick={()=>setActive(3)}>
                    <img className='  rounded-lg object-fill w-full h-3/4' src="PLATE.png" />
                    <p className=' my-2 text-xs  '>Mess Card </p>
                </div>
                <div className=' hover:border-cyan-500 hover:border bg-slate-100 p-3  w-24 h-24   shadow-xl text-center rounded-lg'>
                    <img className='  rounded-lg object-fill w-full h-3/4' src="FEES.png" />
                    <p className=' my-2 text-xs '>FESS </p>
                </div>
                <div className=' hover:border-cyan-500 hover:border bg-slate-100 p-3  w-24 h-24  shadow-xl text-center rounded-lg'>
                    <img className='  rounded-lg object-fill w-full h-3/4' src="https://thumbs.dreamstime.com/b/checklist-icon-form-approved-apply-vector-eps-103785837.jpg" />
                    <p className=' my-2 text-xs  '>Mess Form </p>
                </div>
                
                <div className=' hover:border-cyan-500 hover:border bg-slate-100   w-24 h-24   shadow-xl text-center rounded-lg'  onClick={()=>{setActive(4);setOpen(false)}}>
                    <img className='  rounded-lg object-fill w-full h-3/4' src="https://png.pngtree.com/png-clipart/20190921/original/pngtree-wallpaper-sticker-three-dimensional-note-png-image_4731057.jpg" />
                    <p className='  text-sm  '>Notice </p>
                </div>
                <div className=' hover:border-cyan-500 hover:border bg-slate-100   w-24 h-24  shadow-xl text-center rounded-lg'>
                    <img className='  rounded-lg object-fill w-full h-3/4' src="https://imgs.search.brave.com/PYD3vew0UnSDwXl7YKC4FdbHrbRkBikWIa0gEYwumkg/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9zdHVkZW50cy12/ZWN0b3ItaWQ2NTY3/NDcxNzY_az02Jm09/NjU2NzQ3MTc2JnM9/NjEyeDYxMiZ3PTAm/aD00dld1TGNieGVy/RmhBS3k5S05RYWNi/UnAzb0M2M0lKaXJC/Sy1xS3ZTeUJJPQ" />
                    <p className='  text-sm  '>Student </p>
                </div>
            </div>
            <hr className='mt-5 px-5'/>
            <div className='flex justify-between px-5 mt-3 '>
                <button>Logout</button>
                <AiOutlineDoubleLeft size={30} onClick={()=>setOpen(false)}/>
            </div>
        </div> 
        {
           (()=>{
                
                switch(active){
                    case 1: return <Bookroom/>; 
                    case 2: return <Complained/>; 
                    case 3: return <MessCard/>; 
                    case 4: return <StudentNotice/>;
                }
         })()}
        
    </div>
  )
}
