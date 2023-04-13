import React,{useState} from 'react'
import { StudentDashboard } from '../StudentDashboard';
import { Room } from './Room'

export const Bookroom = () => {
    const [open ,setOpen] = useState(false);
  return (
    <>
    
    <div className=' w-full   flex flex-col justify-center items-center'>
    <div className=' flex space-x-5'>
      <div className=' mt-10 flex text-center items-center h-16 w-16 border-2 border-blue-600 shadow-lg hover:bg-blue-200 duration-700 ease-in-out'>
        <p className=' text-sm'>First Floor</p>
      </div>
      <div className=' mt-10 flex text-center border-2 border-red-600 hover:bg-red-200 duration-700 ease-out items-center h-16 w-16 '>
        <p className=' text-sm'>Second Floor</p>
      </div>
      <div className=' mt-10 flex text-center items-center h-16 w-16  border-2 border-yellow-600 hover:bg-yellow-200 duration-700 ease-out'>
        <p className=' text-sm'>Third Floor</p>
      </div>
      <div className=' mt-10 flex text-center items-center h-16 w-16  border-2 border-cyan-600 hover:bg-cyan-200 duration-700 ease-out'>
        <p className=' text-sm'>Fourth Floor</p>
      </div>
    </div>
        <div className='w-1/2  mt-5'>
        <div className=' flex flex-wrap gap-3 mt-7' onClick={()=>open?setOpen(false):setOpen(true)}><Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/>
        <Room/></div>
        
        
        </div>
        <div className={`  fixed p-5 w-40  shadow-xl rounded-lg bg-slate-100 duration-500 ease-in-out flex flex-col justify-center items-center -top space-y-3 ${!open?" -top-60":"top-40"}`}>
            <p className=' w-full  text-center py-1 border border-cyan-600'>1:48</p>
            <p>Selected room</p>
            <p>F-26</p>
            <button className=' w-full h-10 bg-cyan-300 rounded-lg hover:bg-cyan-500' onClick={()=>{setOpen(false)}}>Book Now</button>
        </div>
        <div className='space-y-5 fixed right-20 mt-40'>
          <div className='flex space-x-5'><div className=' w-8 h-8 bg-green-200'></div><p>Available</p></div>
          <div className=' flex space-x-5'><div className=' w-8 h-8 bg-gray-200'></div><p>Booked</p></div>
          <div className=' flex space-x-5'><div className=' w-8 h-8 bg-yellow-200'></div><p>Reserved</p></div>
        </div>
        
        
    </div>
    </>
  )
}
