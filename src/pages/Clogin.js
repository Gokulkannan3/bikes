import React, { useState } from 'react';
import Lnavbar from '../components/Lnavbar';
import Bike from '../images/bike.jpg';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import '../App.css';

export default function Clogin() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log({ mail, password });
        try {
            const response = await axios.post('https://bikes-server.onrender.com/slogin', {
                mail: mail,
                password: password,
            });
            if (!response.data.auth) {
                setLoginStatus(false);
                setShowPopup(true);
            } else {
                setLoginStatus(true);
                const { token, result} = response.data;
                localStorage.setItem('token', token);
                localStorage.setItem('userData', JSON.stringify(result));
                if(result.category==='Normal User'){
                    navigate('/company');
                }else if(result.category==='Service'){
                    navigate('/service')
                }else if(result.category==='Rental'){
                    navigate('/rental')
                }else if(result.category==='Showroom'){
                    navigate('/company')
                }else{
                    navigate('/login')
                }
            }
        } catch (error) {
            console.error('An unexpected error occurred:', error.message);
            setShowPopup(true);
        }
    };

    return (
        <div>
            <Lnavbar />
            <div className='flex justify-end mt-8'>
                {showPopup && (
                    <Stack>
                        <Alert severity="warning" onClose={() => setShowPopup(false)}>
                            Invalid Credentials Check username and Password
                        </Alert>
                    </Stack>
                )}
            </div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-20" src={Bike} alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setMail(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block text-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    maxLength={9}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block text-center w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
                                />
                                <button
                                    type="button"
                                    onClick={handleTogglePasswordVisibility}
                                    className= "inset-y-0 right-0 pr-3 flex items-center text-lg translate-y-1 leading-5"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-white hover:text-black shadow-gray-400 shadow-md"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to="/csignup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Signup
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
