import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {motion as Motion} from 'framer-motion'
import Footer from '../components/Home/Footer'
import MapInParent from '../Map/Map'
import Table from '../components/ui/Table'
import ContactSection from '../components/Home/ContactUs'
import { tableHeaders,tableData } from '../lib'
const User = () => {
    const [activesection,setActiveSection] = useState('map');
    const [payment,setpayment] = useState('momo');
    // const [collapse,setCollapse] = useState(false);
    const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

    const navLinks = [
        { link: "Map", id: "map" },
        { link: "Request Ride", id: "ride" },
        { link: "History", id: "history" },
        { link: "Contact Us", id: "contact" },
    ]

    const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

    return (
        <div>
        <div className="grid grid-cols-6 h-screen">
            {/* Sidebar */}
            <div className="col-span-1 bg-amber-200 h-screen space-y-2">
                <Motion.div
                    className='flex flex-row cursor-pointer items-center p-2'
                    initial={{ x: -50, scale: 0.4 }}
                    animate={{ x: 0, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate('/')}
                >
                    <h3 className='text-[20px] font-semibold text-[var(--primary)]'>TumaGreen</h3>
                </Motion.div>

                <div className='px-3 pt-5 font-semibold text-lg cursor-pointer'>
                    {navLinks.map((link, i) => (
                        <div key={i} onClick={() =>scrollToSection(link.id)}
                        className={activesection === link.id ? "text-green-600 underline":"text-green-700"}
                        >
                            {link.link}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="col-span-5 w-[83.3vw] bg-green-200  overflow-y-auto">
                <div id='map' className='h-[300px] '>
                    <MapInParent/>
                </div>
                <div id='ride' className='h-[800px] flex'>
                    <div className='w-[60vw] flex flex-col  pt-8 items-center gap-8'>
                        <label className='font-bold text-xl'>Request a Ride</label>
                        <div className='h-[350px] bg-white/80 w-[500px] flex items-center flex-col gap-3 pt-7'>
                            <div className='w-full rounded-lg flex items-center justify-evenly'>
                                <label className='font-semibold text-lg'>Service</label>
                                <select id="servic"
                                className='bg-gray-200 p-2 border-2  h-[40px] rounded-lg'
                                >
                                    <option value="#">delivery</option>
                                    <option value="#">ride</option>
                                    <option value="#">delivery and ride</option>
                                </select>
                            </div>
                            <div className='w-full rounded-lg flex items-center justify-evenly'>
                                <label className='font-semibold text-lg'>Item size</label>
                                <select id="servic"
                                className='bg-gray-200 p-2 border-2 rounded-lg  h-[40px]'
                                >
                                    <option value="#">small</option>
                                    <option value="#">medium</option>
                                    <option value="#">large</option>
                                </select>
                            </div>
                            <div className='w-full  rounded-lg flex items-center justify-evenly'>
                                <label className='font-semibold text-lg'>Location of collection</label>
                                <input type="text" className='bg-gray-100 h-[30px] border-2 rounded-lg '
                                placeholder='district - sector'/>
                            </div>
                            <div className='w-full  rounded-lg flex items-center justify-evenly'>
                                <label className='font-semibold text-lg'>Contact collection</label>
                                <input type="text" className='bg-gray-100 h-[30px] border-2 rounded-lg '
                                placeholder='+250 7xxxxxxxxx'/>
                            </div>
                            <div className='w-full  rounded-lg flex items-center justify-evenly'>
                                <label className='font-semibold text-lg'>Location of destination</label>
                                <input type="text" className='bg-gray-100 h-[30px] border-2 rounded-lg '
                                placeholder='district - sector' />
                            </div>
                            <div className='w-full   flex items-center justify-evenly'>
                                <label className='font-semibold text-lg'>Contact destination</label>
                                <input type="text" className='bg-gray-100 h-[30px] border-2 rounded-lg '
                                placeholder='+250 7xxxxxxxxx'
                                />
                            </div>
                            <div className=''>
                                <label className='font-semibold text-lg px-2'>Total Price</label>
                                #
                            </div>

                        </div>
                        <div className='h-[300px] w-[500px] flex items-center flex-col gap-3 pt-4 bg-white/80'>
                            <div className='flex justify-between w-[10vw]'>
                                <label className={payment==="momo"? "font-bold underline":"font-medium"}
                                onClick={()=>setpayment('momo')}
                                > MOMO </label>
                                <label className={payment==="Bank card"? "font-bold underline":"font-medium"}
                                onClick={()=>setpayment('Bank card')}
                                > Bank card </label>
                            </div>
                            {payment === 'momo' ? (
                                <div className=' h-[160px] w-[320px] mt-6'>
                                    <div className='flex justify-evenly pt-4'>
                                        <label className='font-medium'>Momo number</label>
                                        <input type="text" className='bg-gray-300 rounded-lg'placeholder='+2507 xxxxxx'/>
                                    </div>
                                    <div className='flex justify-evenly pt-4'>
                                        <label className='font-medium'>Momo Name</label>
                                        <input type="text" className='bg-gray-300 rounded-lg'placeholder='Enter your name'/>
                                    </div>
                                    <div className='pt-3 flex justify-center'>
                                        <label
                                        className='px-3 font-medium'
                                        >Status</label>
                                        ###
                                    </div>
                                    <div className='flex justify-center pt-2'>
                                    <button className=' flex font-semibold rounded-lg bg-blue-600 text-white px-4 py-1'>Submit</button>
                                    </div>
                                </div>
                            ):(
                                <div
                                                                                            className=' h-[240px] w-[320px] '>
                                    <div className='flex justify-evenly pt-4'>
                                        <label className='font-medium'>Card Owner</label>
                                        <input type="text" className='bg-gray-300 rounded-lg'placeholder=' Enter your name'/>
                                    </div>
                                    <div className='flex justify-evenly pt-4'>
                                        <label className='font-medium'>Bank Issuer</label>
                                        <input type="text" className='bg-gray-300 rounded-lg'placeholder='Bank name'/>
                                    </div>
                                    <div className='flex justify-evenly pt-4'>
                                        <label className='font-medium'>Amount</label>
                                        <input type="text" className='bg-gray-300 rounded-lg'placeholder='Bank name'/>
                                    </div>
                                    <div className='flex justify-center pt-2'>
                                    <button className=' flex font-semibold rounded-lg bg-cyan-400 text-white px-4 py-1'
                                    onClick={()=>alert(`direct else where to make payment`)}
                                    >Make payment</button>
                                    </div>
                                    <div className='pt-3 flex justify-center'>
                                        <label
                                        className='px-3 font-medium'
                                        >Status</label>
                                        ###
                                    </div>
                                    <div className='flex justify-center pt-2'>
                                    <button className=' flex font-semibold rounded-lg bg-blue-600 text-white px-4 py-1'
                                    onClick={()=>alert('make changes on the progress')}
                                    >Submit</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='w-[40vw]  flex flex-col gap-5 mt-[50px]'>
                        <div className='flex gap-6'>
                            <label className='font-bold text-xl px-2'>Progress</label>
                            ######%
                        </div>
                        <div className='relative bg-blue-300 rounded-lg w-[90%] flex flex-col px-4'>
                            <p className='absolute top-1 right-2 text-green-900 text-lg font-semibold'>Done</p>
                            <label className='font-bold text-xl pt-2'>Request Recieved </label>
                            <div className='flex justify-end'>
                            <label className='font-bold text-xl text-blue-800'
                                        onClick={()=>alert(`toggle the more less view`)}
                                        >more ...</label>
                            </div>
                        </div>
                        <div className='relative bg-blue-300 rounded-lg w-[90%] flex flex-col px-4'>
                            <p className='absolute top-1 right-2 text-green-900 text-lg font-semibold'>Done</p>
                            <label className='font-bold text-xl pt-2'>Rider Found </label>
                            <div className='flex justify-end'>
                            <label className='font-bold text-xl text-blue-800'
                                        onClick={()=>alert(`toggle the more less view`)}
                                        >more ...</label>
                            </div>
                        </div>
                        <div className='relative bg-blue-300 rounded-lg w-[90%] flex flex-col px-4'>
                            <p className='absolute top-1 right-2 text-green-900 text-lg font-semibold'>Done</p>
                            <label className='font-bold text-xl pt-2'>Collecting package </label>
                            <div className='flex justify-end'>
                            <label className='font-bold text-xl text-blue-800'
                                        onClick={()=>alert(`toggle the more less view`)}
                                        >more ...</label>
                            </div>
                        </div>
                        <div className='relative bg-blue-300 rounded-lg w-[90%] flex flex-col px-4'>
                            <p className='absolute top-1 right-2 text-green-900 text-lg font-semibold'>Done</p>
                            <label className='font-bold text-xl pt-2'>package reached destination </label>
                            <div className='flex justify-end'>
                            <label className='font-bold text-xl text-blue-800'
                                        onClick={()=>alert(`toggle the more less view`)}
                                        >more ...</label>
                            </div>
                        </div>
                        <div>
                            Thank you For Chosing TumaGreen
                        </div>
                    </div>
                </div>
                <div id='history' className='flex flex-col items-center p-4'>
                    <Table headers={tableHeaders} data={tableData} />
                </div>
                <div id='contact' className='h-[400px]  flex-center bg-amber-300'>
                    contactus
                </div>

            </div>
        </div>
        <div className='pt-3'>
            <Footer/>
        </div>
            <div className=" bg-green-800 text-center ">
            <p className="text-md font-medium text-white pb-4">
                &copy; {currentYear} TumaGreen. All rights reserved. Innovating for a sustainable Rwanda.
            </p>
            </div>
        </div>
    )
}

export default User
