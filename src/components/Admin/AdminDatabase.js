import React, { useState } from 'react'
import { BiFilterAlt } from "react-icons/bi"
import { BsPen } from "react-icons/bs"
import { AiOutlineUserAdd } from "react-icons/ai"
import { AdminSidebar } from './AdminSidebar';

export const AdminDatabase = () => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [filter, setFilter] = useState(false);
  return (
    <div className=' w-full h-screen flex'>
      <AdminSidebar />
      <div className='  flex-1 h-screen mx-5 '>

        <div className='mt-5 flex space-x-5'><input type="text" className='  px-4 bg-slate-200 w-64 h-10 rounded-lg
            ' placeholder='Search..' />
          
          <div onClick={()=>filter?setFilter(false):setFilter(true)} className='flex space-x-1 items-center px-2 py-1 bg-slate-200 rounded-lg cursor-pointer  text-sm'>  <p >Filter </p><BiFilterAlt /></div>
          <div onClick={()=>add?setAdd(false):setAdd(true)} className=' flex space-x-3 cursor-pointer bg-green-300 rounded-md px-2 items-center'><AiOutlineUserAdd /><p>Add Student</p></div></div>



        <h3 className=' ml-3 mt-5  font-bold'>Database</h3>



        <div className=' flex mt-5 cursor-pointer border-b-2  '>
          <p className=' hover:border-b-2 h-8 w-20 text-center hover:border-b-green-500'>Student</p>
          <p className=' hover:border-b-2 h-8 w-20 text-center hover:border-b-green-500'>Hostel</p>
          <p className=' hover:border-b-2 h-8 w-20 text-center hover:border-b-green-500'>Staff</p>

        </div>

        <table className='w-full mt-2 '>
          <tr className=' h-12 font-bold cursor-pointer ' >
            <td className=' pl-4'>Name</td>
            <td>Roll no</td>
            <td>Hostel</td>
            <td>Hostel Id</td>
            <td>Room no</td>
            <td>Email</td>
          </tr>
          <tr className=' h-12 bg-green-50 cursor-pointer   hover:bg-green-300'>
            <td className=' pl-4 '><div className='flex items-center space-x-2'><img src="gb.png" className='w-8 h-8 mr-3' /><p>Naman Chandra</p></div></td>
            <td>19BCS100</td>
            <td>Sant Kabir das</td>
            <td ><div className='flex items-center space-x-2'><p className='mr-3'>SKD01</p><BsPen /></div></td>
            <td>F-27</td>
            <td>namanchandra37@gmail.com</td>
            
          </tr>
          <tr className=' h-12  cursor-pointer   hover:bg-green-300'>
            <td className=' pl-4 '><div className='flex items-center space-x-2'><img src="gb.png" className='w-8 h-8 mr-3' /><p>Naman Chandra</p></div></td>
            <td>19BCS100</td>
            <td>Sant Kabir das</td>
            <td ><div className='flex items-center space-x-2'><p className='mr-3'>SKD01</p><BsPen /></div></td>
            <td>F-27</td>
            <td>namanchandra37@gmail.com</td>
          </tr>
          <tr className=' h-12 bg-green-50 cursor-pointer   hover:bg-green-300'>
            <td className=' pl-4 '><div className='flex items-center space-x-2'><img src="gb.png" className='w-8 h-8 mr-3' /><p>Naman Chandra</p></div></td>
            <td>19BCS100</td>
            <td>Sant Kabir das</td>
            <td ><div className='flex items-center space-x-2'><p className='mr-3'>SKD01</p><BsPen /></div></td>
            <td>F-27</td>
            <td>namanchandra37@gmail.com</td>
          </tr><tr className=' h-12 cursor-pointer   hover:bg-green-300'>
            <td className=' pl-4 '><div className='flex items-center space-x-2'><img src="gb.png" className='w-8 h-8 mr-3' /><p>Naman Chandra</p></div></td>
            <td>19BCS100</td>
            <td>Sant Kabir das</td>
            <td ><div className='flex items-center space-x-2'><p className='mr-3'>SKD01</p><BsPen /></div></td>
            <td>F-27</td>
            <td>namanchandra37@gmail.com</td>
          </tr>
          <tr className=' h-12 bg-green-50 cursor-pointer   hover:bg-green-300'>
            <td className=' pl-4 '><div className='flex items-center space-x-2'><img src="gb.png" className='w-8 h-8 mr-3' /><p>Naman Chandra</p></div></td>
            <td>19BCS100</td>
            <td>Sant Kabir das</td>
            <td ><div className='flex items-center space-x-2'><p className='mr-3'>SKD01</p><BsPen /></div></td>
            <td>F-27</td>
            <td>namanchandra37@gmail.com</td>
          </tr>
          <tr className=' h-12  hover:bg-green-300'>
            <td className=' pl-4' onClick={() => setOpen(true)}><div className='flex items-center space-x-2'><img src="gb.png" className='w-8 h-8 mr-3' /><p>Naman Chandra</p></div></td>
            <td>19BCS100</td>
            <td>Sant Kabir das</td>
            <td ><div className='flex items-center space-x-2'><p className='mr-3'>SKD01</p><BsPen /></div></td>
            <td>F-27</td>
            <td>namanchandra37@gmail.com</td>
          </tr>
          <tr className=' h-12 bg-green-50  hover:bg-green-300'>
            <td className=' pl-4'><div className='flex items-center space-x-2'><img src="gb.png" className='w-8 h-8 mr-3' /><p>Naman Chandra</p></div></td>
            <td>19BCS100</td>
            <td>Sant Kabir das</td>
            <td onClick={() => edit ? setEdit(false) : setEdit(true)}><div className='flex items-center space-x-2'><p className='mr-3'>SKD01</p><BsPen /></div></td>
            <td>F-27</td>
            <td>namanchandra37@gmail.com</td>
          </tr>

        </table>
        <div className={`  fixed p-2  w-64  shadow-xl rounded-lg bg-slate-100 duration-500 ease-in-out flex flex-col justify-center items-center left-1/2 space-y-3 ${!edit ? " -top-60" : "top-2"}`}>
          <p>Hostel Id</p>
          <input type="text" className=' rounded-xl w-full h-10 border border-black px-2' />
          <button className=' h-10 w-full rounded-lg bg-green-300'>Update</button>
        </div>
        <div onClick={() => setOpen(false)} className={` duration-500 ease-in-out w-96 shadow-xl flex flex-col  h-screen bg-white  top-0   fixed  space-y-3 ${open ? "right-0" : "-right-96"} overflow-y-scroll`}>

          <div className=' my-2 flex flex-col items-center space-y-3'><img src="https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?b=1&s=170667a&w=0&k=20&c=3jwddQH5X_5-1o3hCkZnI1zRyVRIgJXuwT0QqQOf2lM=" className=' rounded-full object-cover w-36 h-36' />
            <h3>Naman Chandra</h3>
            <h4>19BCS063</h4></div>


          <div className=' flex space-x-1 w-full py-5'>
            <div className=' px-10 text-sm  space-y-5'>
              <div className='space-y-2'>
                <p className=' font-bold'>Phone </p>
                <p>+9876455435</p>
              </div>

              <div className='space-y-2'>
                <p className=' font-bold'>Hostel</p>
                <p>Sant Kabir Das</p>
              </div>
              <div className='space-y-2'>
                <p className=' font-bold'>Hostel Id</p>
                <p>SKD01</p>
              </div>
              <div className='space-y-2'>
                <p className=' font-bold'>D-O-B</p>
                <p>03-07-2000</p>
              </div>
              <div className='space-y-2'>
                <p className=' font-bold'>Program</p>
                <p>B.Tech</p>
              </div>
              <div className='space-y-2'>
                <p className=' font-bold'>Blood Group</p>
                <p>O-</p>
              </div>

            </div>

            {/* column2  */}

            <div className=' px-2 text-sm space-y-5'>
              <div className='space-y-2'>
                <p className=' font-bold'>Email</p>
                <p>abdd@gmail.com</p>
              </div>
              <div className='space-y-2'>
                <p className=' font-bold'>Room no</p>
                <p>F-27</p>
              </div>
              <div className='space-y-2'>
                <p className=' font-bold'>Address</p>
                <p>kailash colony ,New delhi</p>
              </div>
              <div className='space-y-2'>
                <p className=' font-bold'>Course</p>
                <p>CSE</p>
              </div>
              <div className='space-y-2'>
                <p className=' font-bold'>Semester</p>
                <p>VII</p>
              </div>
            </div>
          </div>
          





        </div>
        <div className={` w-2/5 h-screen top-0 duration-500 ease-in-out overflow-y-scroll bg-white shadow-xl fixed ${add?"right-0":" -right-1/2"}`}>
           <div className='pl-5 pt-3 w-full h-12 bg-slate-200'>
            <p className=' font-bold'>Add Student</p>
           </div>
           <div className=' flex mt-5 flex-col space-y-4 items-center'>
           <p className=' font-bold '>Choose Image</p>
            <img src="https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?b=1&s=170667a&w=0&k=20&c=3jwddQH5X_5-1o3hCkZnI1zRyVRIgJXuwT0QqQOf2lM=" className=' w-20 h-20 rounded-full object-cover'/>
           
                
                <input type="file" className=' pl-16 self-center h-8  '/>
              
           </div>
           <hr className=' mt-5'/>
           <div className=' w-full flex space-x-5 pl-10 mt-5'>
            <div className=' space-y-3'>
              <div className=' space-y-2'>
                <p className=' font-bold'>Name</p>
                <input type="text" className='border h-8 border-black'/>
              </div>
              
              <div className=' space-y-2'>
                <p className=' font-bold'>Roll no</p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
              <div className=' space-y-2'>
                <p className=' font-bold'>D-O-B</p>
                <input type="date" className='border px-2 py-1  h-8 border-black'/>
              </div>
              <div className=' space-y-2'>
                <p className=' font-bold'>Email</p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
              <div className=' space-y-2'>
                <p className=' font-bold'>Blood Group</p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
              <div className=' space-y-2'>
                <p className=' font-bold'>Parents Phone</p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
              <div className=' space-y-2'>
                <p className=' font-bold'>Room no </p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
              <div className=' space-y-2'>
                <p className=' font-bold'>Mother name </p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
            </div>
            
            <div className=' space-y-3'>
            <div className=' space-y-2'>
                <p className=' font-bold'>Phone</p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
              <div className=' space-y-2'>
                <p className=' font-bold'>Program</p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
              <div className=' space-y-2'>
                <p className=' font-bold'>Course </p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
              <div className=' space-y-2'>
                <p className=' font-bold'>Semester </p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
              <div className=' space-y-2'>
                <p className=' font-bold'>Address </p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
              <div className=' space-y-2'>
                <p className=' font-bold'>Hostel Id</p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
              <div className=' space-y-2'>
                <p className=' font-bold'>Father name </p>
                <input type="text" className='border  h-8 border-black'/>
              </div>
              
            </div>

           </div>
           <div className=' mb-10 mt-5 w-full justify-end pr-12 flex space-x-3'>
            <button className=' rounded-md w-20 h-10 bg-green-400'>Add</button>
            <button onClick={()=>setAdd(false)} className=' rounded-md w-20 h-10 border border-green-600'>Don't</button>
           </div>
      </div>
      <div className={` w-2/5 h-screen top-0 duration-500 ease-in-out overflow-y-scroll bg-white shadow-xl fixed ${filter?"right-0":" -right-1/2"}`}>
      <div className='pl-5 pt-3 w-full h-12 bg-slate-200'>
            <p className=' font-bold'>Filter</p>
           </div>
           
           <div className=' pl-10 mt-5 space-y-2'>
            <p className=' font-bold'>Hostel</p>
            <div className='flex flex-wrap gap-4'><div className='flex space-x-3'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>SKD</p>
            </div>
            <div className='flex space-x-3'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>MMJ</p>
            </div>
            <div className='flex space-x-3'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>RSD</p>
            </div> </div>
            <p className=' font-bold'>Course</p>
            <div className='flex flex-wrap gap-4'><div className='flex space-x-3'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>CSE</p>
            </div>
            <div className='flex space-x-3'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>ECE</p>
            </div>
            <div className='flex space-x-3'>
            <input  type="checkbox" value="LAN" name='LAN'/>
            <p>IT</p>
            </div> </div>
            
            
           </div>
      </div>
        <div>
       
        </div>
      </div>
      
    </div>
  )
}
