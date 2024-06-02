import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Bike from '../images/bike.jpg'

export default function Signavbar() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm shadow-gray-500 h-24 backdrop-blur-lg bg-opacity-80">
        <div className="navbar-start">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div>
              {/* Page content here */}
              <label htmlFor="my-drawer" className="w-6 h-6 drawer-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div> 
            <div className="drawer-side">
              <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
              <div className="menu p-4 w-64 translate-y-10 min-h-full bg-base-200 text-base-content">
                {/* Sidebar content here */}
                <Link to='/'><button className='text-xl'>Home</button></Link>
                <div className="divider"></div> 
                <Link to='/login'><button className='text-xl'>Login</button></Link>
                <div className="divider"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-center">
          <img className='mx-auto h-20' src={Bike} alt='bike'/>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle -translate-x-2">
            <div className="indicator">
              <Link to='/login'><p className='font-2xl'>Login</p></Link>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
