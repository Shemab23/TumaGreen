import React from 'react'
import { useNavigate } from 'react-router-dom'
import {motion as Motion} from 'framer-motion'
import Footer from '../components/Home/Footer'
import MapInParent from '../Map/Map'

const Admin = () => {
    const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

    const navLinks = [
        { link: "link 1", id: "id 1" },
        { link: "link 2", id: "id 2" },
        { link: "link 3", id: "id 3" },
    ]

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

                <div className='px-3 pt-5 font-semibold text-lg'>
                    {navLinks.map((link, i) => (
                        <div key={i} onClick={() => alert(`scroll to section with id ${link.id}`)}>
                            {link.link}
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="col-span-5 w-[83.3vw] bg-green-200  overflow-y-auto">
                <div className='h-[400px]  flex-center bg-gray-400'>
                    <MapInParent/>
                </div>
                <div className='h-[800px]  flex-center bg-blue-200'>Finance</div>
                <div className='h-[800px]  flex-center bg-orange-100'>Rider Registration</div>
                <div className='h-[800px]  flex-center bg-emerald-200'>All Users</div>
                <div className='h-[800px]  flex-center bg-fuchsia-200'>All Partners</div>
                <div className='h-[400px]  flex-center bg-cyan-300'>History</div>

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

export default Admin
