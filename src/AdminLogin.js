
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    // Update username state
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    // Update password state
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // Handle login process
    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:3001/users/login', { username, password }
        );
        navigate('/products');

      } catch (error) {
        
        alert(error.response?.data?.error );
      }
    };

    // Handle registration process
    const handleRegister = async () => {
        try {
            const response = await axios.post('http://localhost:3001/users/register', { username, password });
            //console.log(response.data);
            alert(response.data.message);
        } catch (error) {
            console.error('Error during registration:', error);
            alert(error.response?.data?.error || 'Registration failed');
        }
    };

    return (
        <div className='pt-20'>
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <h1 className="font-bold text-center text-2xl mb-5">Admin {isRegistering ? 'Register' : 'Login'}</h1>
                <div className="bg-white shadow w-full divide-gray-200">
                    <div className="px-5 py-7">
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={handleUsernameChange}
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                        />
                        <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                        />
                        <button
                            onClick={isRegistering ? handleRegister : handleLogin}
                            type="button"
                            className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                        >
                            <span className="inline-block mr-2">{isRegistering ? 'Register' : 'Login'}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-4 h-4 inline-block"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap">
                                <button
                                    className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                                    onClick={() => setIsRegistering(!isRegistering)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="w-4 h-4 inline-block align-text-top"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="inline-block ml-1">{isRegistering ? 'Switch to Login' : 'Switch to Register'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
