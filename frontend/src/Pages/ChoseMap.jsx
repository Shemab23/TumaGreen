import React from 'react'
import { useNavigate } from "react-router-dom";
useNavigate
import MapComponent from "../Map/MapDestination/MapDestination";

const ChoseMap = () => {
    const navigate = useNavigate();

  return (
    <div>

    <MapComponent />
    <div className='flex-center'>
      <button
        onClick={()=>navigate('/user')}
        className="top-4 right-4 bg-blue-700 text-white px-3 py-1 rounded"
      >
        confirme the places
      </button>
    </div>



    </div>
  )
}

export default ChoseMap
