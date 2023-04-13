import React, { useState } from 'react'
import {GrAdd} from "react-icons/gr"
import { AdminSidebar } from './AdminSidebar';

export const AdminNotice = () => {
    const [open,setOpen] = useState(false);
  return (
    <div className=' w-full h-screen flex'>
    <AdminSidebar/>
    <div className='flex-1 h-screen space-y-3 pl-5  pt-5'>
        <div className=' cursor-pointer w-20 h-28 bg-slate-50 border border-green-800 flex items-center justify-center' onClick={()=>setOpen(true)}>
             <GrAdd size={50}/>
        </div>
        <hr/>
        <p className='ml-5 font-bold'>Notices</p>
        <div className=' flex flex-wrap gap-5 p-5 text-center ' onClick={()=>setOpen(false)}>
            <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div>
            <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div>
            <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div>
            <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div>
            <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div>
            <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div> <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div> <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div> <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div> <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div> <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div> <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div> <div className=' w-28 h-26 shadow-xl'>
                <img src="https://imgs.search.brave.com/8sll8mtTO67FIVt8ZkM7Ton_iHY9QqBidgdryCGkMvI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YXR0b3JuZXlkYXZp/ZC5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxMy8w/My9VRC1Ob3RpY2Ut/TWFyY2gxOF9QYWdl/XzEuanBn" className='w-full h-4/5'/>
                <p className=' text-sm mt-1'>fess.jpeg</p>
            </div>
        </div>
        <div className={` shadow-lg bg-white space-y-6 duration-500 ease-in-out top-0 fixed h-screen flex flex-col items-center w-64 ${open?"right-0":"-right-64"}`}>
               <img src="https://imgs.search.brave.com/nViSEV76DyxQ0rYM_jO_rxAhR4qajNndy3VeoH0_XJY/rs:fit:512:512:1/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZXNzZW50aWFs/LWJhc2ljLWZpbGxl/ZC82NC9waWN0dXJl/LWltYWdlLXBob3Rv/LWdhbGxlcnktcHJl/dmlldy01MTIucG5n" className=' w-1/2'/>
               <div className=' px-5 space-y-4'>
               <input type="file" className=' cursor-pointer w-full h-8' />
               <p className=' text-sm'>Name</p>
               <input type="text" className=' w-full h-8 border border-black px-2'/></div>
               
               <button className=' rounded-lg w-2/4 h-10 bg-gray-200'>Upload Notice</button>
        </div>
    </div>
    </div>
  )
}
