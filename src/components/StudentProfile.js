import React from 'react';

const StudentProfile = () => {
    return (
        <div className=' w-full space-x-10 h-screen bg-gray-300 px-10 flex py-5 '>
             <div className='  w-1/4 bg-white shadow-lg rounded-lg  border flex flex-col pt-10 items-center space-y-5'>
            
                <img src="gb.png" className=' w-32 h-32  ml-2' />
                
                <button className=' w-1/2 h-8 bg-cyan-400'>Upload Image</button>

                    
                
            </div>

          
            <div className='w-3/4 bg-white shadow-lg rounded-lg  '>
            <h2  className='font-bold w-full  rounded-t-lg  h-14 pl-10 pt-5 bg-slate-200'>Edit Profile</h2>
            <div className=' w-full space-x-10 flex px-10 py-5 '>
            <div className=' space-y-3 w-1/2'><div className=' space-y-3'>
                    <p>Full Name</p>
                    <input type="text" value="Naman" className=' w-full h-10 border border-black px-4'/>
                </div>
                <div className=' space-y-3'>
                    <p>Full Name</p>
                    <input type="text" value="Naman" className=' w-full h-10 border border-black px-4'/>
                </div>
                <div className=' space-y-3'>
                    <p>Full Name</p>
                    <input type="text" value="Naman" className=' w-full h-10 border border-black px-4'/>
                </div>
                <div className=' space-y-3'>
                    <p>Full Name</p>
                    <input type="text" value="Naman" className=' w-full h-10 border border-black px-4'/>
                </div></div>
                
                <div className='space-y-3 w-1/2'><div className=' space-y-3'>
                    <p>Full Name</p>
                    <input type="text" value="Naman" className=' w-full h-10 border border-black px-4'/>
                </div>
                <div className=' space-y-3'>
                    <p>Full Name</p>
                    <input type="text" value="Naman" className=' w-full h-10 border border-black px-4'/>
                </div>
                <div className=' space-y-3'>
                    <p>Full Name</p>
                    <input type="text" value="Naman" className=' w-full h-10 border border-black px-4'/>
                </div>
                <div className=' space-y-3'>
                    <p>Full Name</p>
                    <input type="text" value="Naman" className=' w-full h-10 border border-black px-4'/>
                </div></div>
            </div>
            <button className=' w-44 h-8 ml-10 bg-cyan-400'>Upldate Info</button>
            </div>
           
        </div>
    )
};

export default StudentProfile;