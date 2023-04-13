import React from 'react'
import { AdminSidebar } from './AdminSidebar'

export const AdminHostel = () => {
    return (
        <div className=' w-full flex h-screen'>
            <AdminSidebar />
            <div className='p-2 w-full space-y-2 h-screen  bg-slate-200'>
                {/* <div className=' flex p-2  h-screen flex-col  items-center w-44 space-y-2'>
      <div className=' w-full h-24 flex justify-center items-center text-xl bg-white shadow-xl'><p>Tulsidas</p></div>
      <div className=' w-full h-24 flex justify-center items-center text-xl bg-white shadow-xl'><p>Tulsidas</p></div>
      <div className=' w-full h-24 flex justify-center items-center text-xl bg-white shadow-xl'><p>Tulsidas</p></div>
      <div className=' w-full h-24 flex justify-center items-center text-xl bg-white shadow-xl'><p>Tulsidas</p></div>
      <div className=' w-full h-24 flex justify-center items-center text-xl bg-white shadow-xl'><p>Tulsidas</p></div>
      <div className=' w-full h-24 flex justify-center items-center text-xl bg-white shadow-xl'><p>Tulsidas</p></div>
      <div className=' w-full h-24 flex justify-center items-center text-xl bg-white shadow-xl'><p>Tulsidas</p></div>
      
      </div>
      <div className=' flex-1 h-screen bg-white shadow-xl '></div> */}
                <div className=' flex space-x-3 p-2 bg-white shadow-xl'>
                    <div className='    border-2 border-gray-300 rounded-lg'>
                        <select id="countries" class=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Choose Gender</option>
                            <option value="B">Boy</option>
                            <option value="G">Girl</option>

                        </select></div>
                    <div className='    border-2 border-gray-300 rounded-lg'>
                        <select id="countries" class=" text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Choose Hostel</option>
                            <option value="B">S.K.D</option>
                            <option value="G">M.M.J</option>
                            <option value="B">S.R.D</option>
                            <option value="G">Raheem</option>

                        </select></div>


                </div>
                <div className='flex flex-1 h-4/5 p-2 bg-white shadow-xl'>
                    
                </div>
            </div>
        </div>
    )
}
