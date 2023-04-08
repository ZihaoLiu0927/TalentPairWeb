import React, {useState} from 'react';

export default function SignUp( { onSignIn } ) {

    const [email, setEmail] = useState('');

    return (
            <div className="px-24 py-48 h-screen justify-center items-center">
                <div className="flex h-full pt-60 justify-center rounded-md bg-[url('../../img/bg.jpg')] bg-cover from-cyan-500 to-blue-500 " >
                <form className="max-w-lg ">
                    <div className="flex items-center mb-6">    
                        <div className="w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Full Name
                        </label>
                        </div>
                        <div className="w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                            id="inline-full-name" type="text" placeholder="Your email" onChange={(email) => setEmail(email)}/>
                        </div>
                    </div>
                    <div className="flex items-center mb-6">
                        <div className="w-1/3">
                        <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
                            Password
                        </label>
                        </div>
                        <div className="w-2/3">
                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="w-2/3"></div>
                        <div className="w-1/3">
                        <button onClick={onSignIn} className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                            Register now
                        </button>
                        </div>
                    </div>

                </form>
                </div>
            </div>

    );
}