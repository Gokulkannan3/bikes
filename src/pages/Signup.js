import React from 'react'
import Signavbar from '../components/Signavbar'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Modal from 'react-modal';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import Animation from './animation.json';
import './Signup.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');

  const addUser = (e) => {
    e.preventDefault();
    if (!name || !contact || !mail || !address || !password || !cpassword) {
      setValidationMessage("Please fill in all details");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#])[A-Za-z\d@#]{8,}$/;
    if (!passwordRegex.test(password)) {
      setValidationMessage("Password must have: \n- The first letter as a capital letter\n- At least one digit\n- At least one of the special characters @ or #\n- Minimum 8 characters in total");
      return false;
    }

    if (!mail.endsWith('@gmail.com')) {
      setValidationMessage("Invalid email format. Please use @gmail.com");
      return;
    }

    if (password !== cpassword) {
      setValidationMessage("Password and Confirm Password do not match");
      return;
    }

    Axios.post(`https://bikes-server.onrender.com/register`, {
      name: name,
      contact: contact,
      mail: mail,
      address: address,
      category: "Normal User",
      password: password,
      cpassword: cpassword,
    })
      .then(() => {
        console.log("Success");
        setModalIsOpen(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
        <Signavbar/>
          <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className='flex justify-end mt-8'>
          {validationMessage && (
            <>
              <Stack className='relative'>
                <Alert severity="warning" onClose={() => setValidationMessage('')}>
                  {validationMessage}
                </Alert>
              </Stack>
              {window.scrollTo({ top: 0, behavior: 'smooth' })}
            </>
          )}
        </div>
        
        <div>
          <div class="border-b border-gray-900/10 pb-12 p-5">
            <form>
              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                  <div class="mt-2">
                    <input type="text" onChange={(e) => setName(e.target.value)} name="first-name" id="first-name" autocomplete="given-name" class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"></input>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div class="mt-2">
                    <input id="email" onChange={(e) => setMail(e.target.value)} name="email" type="email" autocomplete="email" class="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"></input>
                  </div>
                </div>

                <div class="sm:col-span-3">
                  <label for="contact" class="block text-sm font-medium leading-6 text-gray-900">Contact</label>
                  <div class="mt-2">
                    <input id="contact" onChange={(e) => setContact(e.target.value)} name="contact" type="contact" autocomplete="contact" class="block text-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"></input>
                  </div>
                </div>  

                <div className="sm:col-span-3">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                  <div className="mt-2">
                    <input onChange={(e) => setAddress(e.target.value)} type="text" name="street-address" id="street-address" autoComplete="street-address" className="block w-full text-center rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="cpassword" className="block text-xl font-medium leading-6 text-black">Password</label>
                  <div className="mt-2">
                    <input id="cpassword" name="cpassword" type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} autoComplete="new-password" maxLength={9} className="block w-full text-center rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                    <button className='text-teal-950' type="button" onClick={handleTogglePasswordVisibility}>
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                
                <div className="sm:col-span-3">
                  <label htmlFor="cpassword" className="block text-xl font-medium leading-6 text-black">Confirm Password</label>
                  <div className="mt-2">
                    <input id="cpassword" name="cpassword" type={showConfirmPassword ? "text" : "password"} onChange={(e) => setCpassword(e.target.value)} autoComplete="new-password" maxLength={9} className="block w-full text-center rounded-md border-0 py-1.5 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                    <button className='text-teal-950' type="button" onClick={handleToggleConfirmPasswordVisibility}>
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                <div className='flex justify-center'>
                  <button onClick={addUser} type="submit" class="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Sign in</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className='flex justify-center items-center'>
            <Modal
              isOpen={modalIsOpen}
              contentLabel="Registration Success Modal"
              ariaHideApp={false}
              className='flex justify-center items-center content-center h-screen w-screen fixed top-0 left-0'
              overlayClassName='fixed inset-0 bg-gray-500 bg-opacity-75'
            >
              <div className='lot flex justify-center items-center content-center h-96 w-96 bg-white p-4 rounded-md'>
                <Lottie
                  animationData={Animation}
                  loop={false}
                  autoplay={true}
                  className="lot"
                  style={{ width: 400, height: 400, flex:1,justifyContent:'center', alignItems:'center'}}
                />
                
              </div>
              <Link to='/login'>
                <button onClick={closeModal} className='close bg-red-500 w-16 h-16 -translate-y-56 text-white rounded-full font-black'>
                    X
                </button>
              </Link>
            </Modal>
          </div>
      </div>
    </div>
  )
}