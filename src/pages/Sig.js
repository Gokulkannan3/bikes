import React from 'react';
import Signavbar from '../components/Signavbar';
import avatar from '../images/nuser.png'
import Showroom from '../images/dealer.jpg'
import rent from '../images/rent.png'
import service from '../images/male.png'
import { Link } from 'react-router-dom';

export default function Sig() {
  return (
    <div>
      <Signavbar />
      <div className="border-b border-gray-900/10 pb-12 p-5 flex justify-center mt-28">
        <form>
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="w-44 h-44 bg-cover bg-center hover:scale-110" style={{ backgroundImage: `url(${avatar})` }}>
              <Link to='/signup'>
                <button className="w-full h-full bg-black bg-opacity-50 text-white rounded-lg hover:font-bold text-lg flex items-center justify-center">
                    Normal User
                </button>
              </Link>
            </div>
            <div className="w-44 h-44 bg-cover bg-center hover:scale-110" style={{ backgroundImage: `url(${Showroom})` }}>
              <Link to='/showroom'>
                <button className="w-full h-full bg-black bg-opacity-50 text-white rounded-lg hover:font-bold text-lg flex items-center justify-center">
                  Showroom Admin
                </button>
              </Link>
            </div>
            <div className="w-44 h-44 bg-cover bg-center hover:scale-110" style={{ backgroundImage: `url(${rent})` }}>
              <Link to='/rental'>
                <button className="w-full h-full bg-black bg-opacity-50 text-white rounded-lg hover:font-bold text-lg flex items-center justify-center">
                  Rental Admin
                </button>
              </Link>
            </div>
            <div className="w-44 h-44 bg-cover bg-center hover:scale-110" style={{ backgroundImage: `url(${service})` }}>
              <Link to='/service'>
                <button className="w-full h-full bg-black bg-opacity-50 text-white rounded-lg hover:font-bold text-lg flex items-center justify-center">
                  Service Admin
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
