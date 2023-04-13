import React, { useState } from 'react'
import {AiOutlineDown,AiOutlineUp} from "react-icons/ai";
import { HostelNavbar } from './HostelNavbar';
const HostelComplaints = () => {
    const[open, setOpen] = useState(false);
  return (
    <div className='w-full h-screen'>
            <HostelNavbar/>
            <div className='h-full  bg-gray-200 pt-20 pb-5 flex space-x-5 px-10'>
            <div className=' w-1/5 h-full bg-white shadow-lg rounded-lg'>
               
               <div className='h-4/5 px-5 space-y-3 '>
               <div className='flex pl-5 justify-start space-x-5 items-center border-2 border-blue-400 hover:bg-blue-200 mt-5 py-2 rounded-md'>
               <img src="https://imgs.search.brave.com/iYHsetrQ00cj734fF2JJc2STTovxbsfJsZgHOC5SLQ8/rs:fit:1024:1024:1/g:ce/aHR0cHM6Ly9jZG4w/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvY29tcHV0ZXIt/YWNjZXNzb3JpZXMt/ZmlsbGVkLW91dGxp/bmUvNjQvbGFuLWNh/YmxlLWNvbm5lY3Qt/Y29tcHV0ZXItYWNj/ZXNzb3J5LTEwMjQu/cG5n" className='w-8 h-8'/>
               <p>LAN</p>
               </div>
               <div className='flex pl-5 justify-start space-x-5 items-center border-2  border-red-400 hover:bg-red-200 mt-5 py-2 rounded-md'>
               <img src="https://imgs.search.brave.com/1S5gU-B4PKfsRAZMNiM0sHtzIRRkuQJuRM-Q9rIOi0c/rs:fit:600:600:1/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaW1pbGFycG5n/LmNvbS92ZXJ5LXRo/dW1ibmFpbC8yMDIw/LzA4L0lsbHVzdHJh/dGlvbi1vZi1saWdo/dC1idWxiLWljb24t/b24tdHJhbnNwYXJl/bnQtYmFja2dyb3Vu/ZC1QTkcucG5n" className='w-8 h-8'/>
               <p>Electricity</p>
               </div>
               <div className='flex pl-5 justify-start space-x-5 items-center border-2 border-green-500 hover:bg-green-200 mt-5 py-2 rounded-md'>
               <img src="https://imgs.search.brave.com/HCAJkYCjveXmWXWTZhvGmk1qDlKqvh2-kjYnkU9dl9s/rs:fit:615:801:1/g:ce/aHR0cHM6Ly93d3cu/cGluY2xpcGFydC5j/b20vcGljZGlyL2Jp/Zy81NTQtNTU0MTMz/OV9jYXJwZW50ZXIt/cG5nLXBob3RvLWNs/aXAtYXJ0LWNvbnN0/cnVjdGlvbi13b3Jr/ZXItdHJhbnNwYXJl/bnQucG5n" className='w-8 h-8'/>
               <p>Carpenter</p>
               </div>
               <div className='flex pl-5 justify-start space-x-5 items-center border-2 border-pink-400 hover:bg-pink-200 mt-5 py-2 rounded-md'>
               <img src="https://imgs.search.brave.com/FdM4jZIazf8C3rhss1LZa-jPw6FSQy0PG2qKAOvPP7I/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9pY29u/LWxpYnJhcnkuY29t/L2ltYWdlcy9vdGhl/cnMtaWNvbi9vdGhl/cnMtaWNvbi0xNy5q/cGc" className='w-8 h-8'/>
               <p>Others</p>
               </div>
               
               
               
                
               
               
               </div>
            </div>
                <div className='bg-white shadow-lg rounded-lg w-4/5  flex flex-wrap gap-5 pl-5 text-sm  pt-5'>
                 <div className= {`w-72    bg-red-100 rounded-lg shadow-lg flex flex-col   ${open? "h-44":" h-10"}`}>
                    <div className=' flex w-full h-10 py-1 items-center justify-around'>
                        <p>Naman Chandra</p>
                        <p className=' bg-cyan-100 text-violet-600  px-2 text-sm py-1 rounded-md text-center'>F-26</p>
                        { open?<AiOutlineDown onClick={()=>open?setOpen(false):setOpen(true)}/>:<AiOutlineUp onClick={()=>open?setOpen(false):setOpen(true)}/>}
                    
                    </div>
                    <div className={`w-full px-5 ${open?"h-32" :"hidden"}`}>
                     <p>hi...</p>
                     </div>

                 </div>
                 
                </div></div>

        </div>

  )
}

export default HostelComplaints