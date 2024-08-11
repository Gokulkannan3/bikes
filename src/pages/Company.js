import React from 'react'
import Navbar from '../components/Cnav'
import './Company.css' 
import { Link } from 'react-router-dom'

export default function Company() {
  return (
    <div>
        <Navbar/>
        Company
        <div>
          <div className='top flex justify-around'>
            <div>
              <p>Test drives</p>
              <div className='w-80 bg-orange-200 text-teal-950 shadow-xl mx-auto px-4'>
                <p>hello</p>
              </div>
            </div>
            <div className='border-2 border-gray-500 h-96'></div>
            <div>
              <p>Bookings</p>
              <div className='w-80 bg-orange-200 text-teal-950 shadow-xl mx-auto px-4'>
                <p>hello</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-10'>
            <Link to='/addbikes'>
              <button className='btn bg-gray-300 border-rounded shadow-xl'>
                Add Bikes
              </button>
            </Link>
          </div>
        </div>
    </div>
  )
}
