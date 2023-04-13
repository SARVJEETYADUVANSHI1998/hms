import React from 'react'

const MessCard = () => {
  return (
    <>
    <div className=' w-full h-screen flex flex-col items-center  bg-white'>
    <button className=' mt-10 w-44 h-10 bg-green-300 rounded-md'>Download Mess Card</button>
       <div className='w-1/2 px-8 py-4 mt-10 bg-cyan-100 shadow-lg space-y-5 '>

       {/* Top */}

          <div className=' w-full text-center'>
              <h1>SOUTH ASIAN CATERS</h1>
              <h4>MESS IDENTITY CARD</h4>
          </div>

          {/* MIDDLE */}

          <div className=' flex space-x-2 items-center '>
          <div className=' flex flex-col space-y-2 w-3/4'>
              <div className=' flex justify-between '>
                 <div className=' space-x-4 flex'>
                    <p>Roll no :</p> 
                    <p>19/BCS/063</p>
                 </div>
                 <div className=' space-x-4 flex'>
                    <p>Date :</p> 
                    <p>.../.../....</p>
                 </div>
              </div>
              <div>
                 <div className=' space-x-4 flex'>
                    <p>Name :</p> 
                    <p>Sudhanshu vats</p>
                 </div>
              </div>
              <div>
                 <div className=' space-x-4 flex '>
                    <p>Hostel : </p> 
                    <p>S.K.D</p>
                 </div>
              </div>
              <div>
                 <div className=' space-x-4 flex'>
                    <p>Room no :</p> 
                    <p>F-26</p>
                 </div>
              </div>
              </div>
              <div className='flex justify-center w-1/4'>
                <div className=' w-24 h-28 border-black border'>
                  <img src="https://media.istockphoto.com/id/1438969575/photo/smiling-young-male-college-student-wearing-headphones-standing-in-a-classroom.jpg?b=1&s=170667a&w=0&k=20&c=3jwddQH5X_5-1o3hCkZnI1zRyVRIgJXuwT0QqQOf2lM=" className=' w-full h-full object-cover'/>
                </div>

              </div>
             
          </div>

          {/* BOTTOM */}

          <div className=' flex justify-between items-center'>
             <div>
                <p>Hostel Manager Signature</p>
                <p>.........................</p>
             </div>
             <div>
                <p>Mess Manager Signature</p>
                <p>.........................</p>
             </div>
          </div>
       </div>

    </div>

    </>
  )
};

export default MessCard;