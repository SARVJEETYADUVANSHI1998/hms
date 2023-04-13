import React from 'react'
import { StudentDashboard } from './StudentDashboard';


export const Complained = () => {
  return (
   
    
   
    
    <div className='p-5 flex flex-col justify-center items-center space-y-5'>
        <h1 className='  mt-5 text-xl font-bold '>Students Complain Form</h1>
            <div className=' space-y-8 flex flex-col items-center '>
            <h3 className='flex font-bold self-start ' >Complain Type </h3>
            <div className='flex flex-wrap gap-5'>
            <div className='flex space-x-5'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>LAN</p>
            </div>
            <div className='flex space-x-5'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>FAN</p>
            </div> <div className='flex space-x-5'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>BULB</p>
            </div>
             <div className='flex space-x-5'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>DOOR/WINDOW</p>
            </div>
            <div className='flex space-x-5'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>SWITCH BOARD</p>
            </div>
            <div className='flex space-x-5'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>WATER COOLER</p>
            </div>
            <div className='flex space-x-5'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>OTHERS</p>
            </div>
            </div>

            
                <textarea className='w-full border h-52 border-slate-300 p-5' placeholder='write complain.......'></textarea>
            
            <button className=' w-1/5 h-10 bg-slate-400'>SUBMIT</button>
            </div>
    </div>
    
  )
};

