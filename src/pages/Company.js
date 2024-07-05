import React from 'react'
import Navbar from '../components/Cnav'

export default function Company() {
  return (
    <div>
        <Navbar/>
        Company
        <div>
          <div className='flex justify-around'>
            <div>
              <p>Test drives</p>
              <div className='card w-80 bg-orange-200 text-teal-950 shadow-xl mx-auto px-4'>
                <p>hello</p>
              </div>
            </div>
            <div className='border-2 border-gray-500 h-96'></div>
            <div>
              <p>Bookings</p>
              <div className='card w-80 bg-orange-200 text-teal-950 shadow-xl mx-auto px-4'>
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
