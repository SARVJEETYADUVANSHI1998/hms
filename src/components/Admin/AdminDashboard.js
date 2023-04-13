import React, { useState } from 'react'
import { RxDashboard } from 'react-icons/rx'
import { BiNotepad } from 'react-icons/bi'
import { BsDatabase } from 'react-icons/bs'
import { HiOutlineLogout } from 'react-icons/hi'
import { AdminDatabase } from './AdminDatabase'
import { AdminNotice } from './AdminNotice'
import { AdminSidebar } from './AdminSidebar'
import Chart from 'react-apexcharts';
export const AdminDashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className=' w-full h-screen flex'>
            <AdminSidebar />
            <div className=' flex-1  h-screen overflow-y-scroll  bg-slate-200 p-2'>
                <div className=' bg-white shadow-xl pt-5 w-full '>

                    <div className=' flex justify-center   '>
                        <Chart
                            type="donut"
                            width={300}
                            height={300}
                            series={[1200, 3600]}


                            options={{
                                labels: ['BOYS', 'GIRLS'],
                                title: {
                                    text: "Students",
                                    // align:"center",
                                },

                                dataLabels: {
                                    enabled: true,
                                    style: {
                                        fontSize: "16px",

                                    }
                                },



                                plotOptions: {
                                    pie: {
                                        size: 200,
                                        donut: {
                                            labels: {
                                                show: true,
                                                total: {
                                                    show: true,


                                                    fontSize: 16,
                                                    color: '#f90000',
                                                }
                                            }
                                        }
                                    }

                                },

                                dataLabels: {
                                    enabled: true,
                                }


                            }}

                        />
                        <Chart
                            type="donut"
                            width={300}
                            height={300}
                            series={[40, 70, 89, 120]}


                            options={{
                                labels: ['SKD', 'Raheem', 'MMJ', 'SRD'],
                                title: {
                                    text: "Rooms",
                                    // align:"center",
                                },

                                dataLabels: {
                                    enabled: true,
                                    style: {
                                        fontSize: "16px",

                                    }
                                },

                                plotOptions: {
                                    pie: {
                                        size: 200,
                                        donut: {
                                            labels: {
                                                show: true,
                                                total: {
                                                    show: true,


                                                    fontSize: 16,
                                                    color: '#f90000',
                                                }
                                            }
                                        }
                                    }

                                },

                                dataLabels: {
                                    enabled: true,
                                }


                            }}

                        />
                        <Chart
                            type="donut"
                            width={300}
                            height={300}
                            series={[34, 67, 89, 23]}

                            options={{
                                labels: ['Mahamaya', 'laxmibai', 'ishmat', 'Mahadevi'],
                                title: {
                                    text: "Complaints",
                                    // align:"center",
                                },





                                plotOptions: {
                                    pie: {
                                        
                                        donut: {
                                            
                                            labels: {
                                                show: true,
                                                total: {
                                                    show: true,


                                                    fontSize: 16,
                                                    color: '#f90000',
                                                }
                                            }
                                        }
                                    }

                                },
                                
                                dataLabels: {
                                    enabled: true,
                                    enabled: true,
                                    style: {
                                        fontSize: "8px",

                                    }
                                }


                            }}

                        />

                    </div>
                </div>
                <div className=' w-full bg-white shadow-xl p-2 text-center mt-5'>
                 <p className=' font-bold'>Boys</p>
            </div>
                <div className=' flex justify-center mt-5  flex-wrap gap-5'>

                    <div className='  w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl ' onClick={() => setOpen(true)}>
                        Sant kabir das
                    </div>
                    <div onClick={() => setOpen(false)} className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Raheem</div>
                    <div className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Tulsidas</div>
                    <div className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Ram saran Das</div>
                    <div className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Valmiki</div>
                    <div className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Narayan</div>
                    <div className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Birsa Munda</div>
                    <div className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Sant ravi das</div>
                </div>
                <div className={` w-2/5 h-screen fixed top-0 duration-500 ease-in-out   bg-white shadow-xl ${open ? "right-0" : "-right-2/3"}`}>hi</div>
                <div className=' w-full bg-white shadow-xl p-2 text-center mt-5'>
                 <p className=' font-bold'>Girls</p>
            </div>
            <div className=' flex justify-center mt-5   flex-wrap gap-5'>

                    <div className='  w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl ' onClick={() => setOpen(true)}>
                        Sant kabir das
                    </div>
                    <div onClick={() => setOpen(false)} className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Raheem</div>
                    <div className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Tulsidas</div>
                    <div className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Ram saran Das</div>
                    <div className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Valmiki</div>
                    <div className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Narayan</div>
                    <div className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Birsa Munda</div>
                    <div className=' w-52 h-36 flex justify-center items-center text-2xl bg-white shadow-xl'>Sant ravi das</div>
                </div>
            </div>
            
        </div>
    )
}
