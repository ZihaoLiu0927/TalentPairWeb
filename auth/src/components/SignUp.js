import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp( { onSignIn } ) {

    const [email, setEmail] = useState('');

    return (
        <div className="h-screen">
            <div className="flex h-full pt-96 justify-center bg-[url('../../img/bg.jpg')] bg-cover from-cyan-500 to-blue-500 " >
                <form className='w-1/4 leading-10'>
                    <div className="flex items-center mb-6">    
                        <div className="w-1/3">
                            <label className="block text-right text-2xl text-gray-500 font-bold mb-1 pr-4" >
                                Full Name
                            </label>
                        </div>
                        <div className="w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500" 
                                id="inline-full-name" type="text" placeholder="Your email" onChange={(email) => setEmail(email)}/>
                        </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <div className="w-1/3">
                            <label className="block text-right text-2xl text-gray-500 font-bold mb-1 pr-4" >
                                Password
                            </label>
                        </div>
                        <div className="w-2/3">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500" id="inline-password" type="password" placeholder="******************" />
                        </div>
                    </div>

                    <div className="flex justify-end pb-5">
                        <div>
                            <Link to='/auth/signin' className="focus:shadow-outline focus:outline-none text-white py-2 px-4 rounded">
                                Back to sign in
                            </Link>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button onClick={onSignIn} className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}