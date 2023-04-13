import React from 'react'
import { HostelNavbar } from './HostelNavbar';
import Chart from 'react-apexcharts';


const HostelDashboard = () => {
    return (
        <div className='w-full h-screen'>
            <HostelNavbar />
            <div className='h-full  bg-gray-200 pt-20  pb-5 flex space-x-5 px-10'><div className=' flex flex-col space-y-5 items-center w-1/5 h-full bg-white shadow-lg rounded-lg'>
                <img src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/03/19/Pictures/noida-08november2010-gautam-htphoto-university-noida-greater_a63589a4-2b9a-11e8-8732-87a46da2a8cc.jpg" className='rounded-full w-36 h-36 mt-5 object-cover' />
                <p className=' font-bold text-xl'>Sant Kabir Das</p>
                <p className='  px-2 py-2 text-center rounded-lg border-2 border-blue-500'>Boys Hostel</p>
            </div>
                <div className='bg-white  shadow-lg rounded-lg w-4/5 '>
                    <div className=' flex mt-5 justify-center  '>
                        <Chart
                            type="donut"
                            width={300}
                            height={300}
                            series={[34, 67, 89, 23]}

                            options={{
                                labels: ['CSE', 'IT', 'AI', 'ECE'],
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
                            series={[40, 70]}


                            options={{
                                labels: ['Good', 'Bad'],
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
                                labels: ['lan', 'light', 'door', 'other'],
                                title: {
                                    text: "Complaints",
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

                    </div>

                </div></div>

        </div>



    )
};

export default HostelDashboard;