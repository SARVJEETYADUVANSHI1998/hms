import React from 'react'
import { NavLink } from 'react-router-dom'

export const Login = () => {
  return (
    <div className=' flex '>
    <div className=" bg-cyan-200 w-2/5 flex justify-center items-center ">
  <img  src="gb.png" alt="logo"  className=" w-44 h-44" />
  </div>
    <div className=' w-3/5 shadow-sm py-16 px-32  flex flex-col justify-center items-center space-y-5 '>
    <div  className='w-full flex flex-col space-y-2'>
    <label>Select Role</label>
    <div className=' flex w-full space-x-5 items-center justify-between '>
    <NavLink to='/admin'>
      <div className='  hover:border-cyan-500 hover:border bg-slate-100 shadow-xl w-32 h-40 text-center rounded-lg'>
      <img className=' rounded-lg object-fill w-full h-3/4' src="https://imgs.search.brave.com/3lcabZOd_139nzPn7eKqSx3ZqBmrOVG8wkty7Hz6XJ4/rs:fit:626:417:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5mcmVlcGlrLmNv/bS9mcmVlLXZlY3Rv/ci91bml2ZXJzaXR5/LWJ1aWxkaW5nLWls/bHVzdHJhdGlvbi1p/c29sYXRlZC13aGl0/ZS1iYWNrZ3JvdW5k/XzE4NDIyMC0yNDAu/anBn"/>
      <p className=' mt-2 text-sm'>Admin </p>
      </div>
      </NavLink>
      <NavLink to='/student'>
    <div className=' hover:border-cyan-500 hover:border bg-slate-100  w-32 h-40 shadow-xl text-center rounded-lg'>
      <img className='  rounded-lg object-fill w-full h-3/4' src="https://imgs.search.brave.com/PYD3vew0UnSDwXl7YKC4FdbHrbRkBikWIa0gEYwumkg/rs:fit:612:612:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vdmVjdG9y/cy9zdHVkZW50cy12/ZWN0b3ItaWQ2NTY3/NDcxNzY_az02Jm09/NjU2NzQ3MTc2JnM9/NjEyeDYxMiZ3PTAm/aD00dld1TGNieGVy/RmhBS3k5S05RYWNi/UnAzb0M2M0lKaXJC/Sy1xS3ZTeUJJPQ"/>
      <p className=' mt-2 text-sm  '>Student </p>
    </div>
    </NavLink>
    <NavLink to='/Hostel'>
    <div className=' hover:border-cyan-500 hover:border bg-slate-100 shadow-xl w-32 h-40 text-center rounded-lg'>
      <img className='rounded-lg object-fill w-full h-3/4' src="https://imgs.search.brave.com/Vvn_3ph65jiA6AZ6kIrbaBgsVG5_uYrIQTscde7Pmog/rs:fit:1023:784:1/g:ce/aHR0cHM6Ly9zdDMu/ZGVwb3NpdHBob3Rv/cy5jb20vODY0MzA5/Ni8xMzA2OC92Lzk1/MC9kZXBvc2l0cGhv/dG9zXzEzMDY4OTgz/NC1zdG9jay1pbGx1/c3RyYXRpb24tdmVj/dG9yLWlzb21ldHJp/Yy1pbGx1c3RyYXRp/b24tb2YtaG9zdGVs/LmpwZw"/>
      <p className='  mt-2 text-sm  '>Hostel </p>
    </div>
    </NavLink>
    </div>
    </div>
      <div className=' w-full flex flex-col space-y-2 '><label>User Id</label>
        <input className=' h-10 w-full border border-cyan-500 px-5' type="text" placeholder="User Id" /></div>
      <div className='w-full flex flex-col  space-y-2'><label>Password</label>
        <input className=' h-10 w-full border border-cyan-500 px-5' type="password" placeholder="********" /></div>
      
      <button className=' w-full h-10 bg-cyan-500 '>Login</button>
    </div>
    </div>
  )
}

