import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

export default function Header() {

  return (
    <nav className="flex items-center justify-between flex-wrap bg-emerald-950 p-14 rounded-sm">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} className="fill-current h-40 w-40 mr-2" /> 
        <span className="font-semibold text-xl tracking-tight"></span>
      </div>
      <div className="flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow">
          {/* navbar mid placeholder */}
        </div>

        <div className="inline-block mr-16">
          <a href="#" className="inline-block mt-2 text-3xl font-semibold text-cyan-400 hover:text-white mr-8">
            Docs
          </a>
          <a href="#" className="inline-block mt-2 text-3xl font-semibold text-cyan-400 hover:text-white mr-8">
            Examples
          </a>
          <a href="#" className="inline-block mt-2 text-3xl font-semibold text-cyan-400 hover:text-white">
            Blog
          </a>
        </div>
        <div>
          <Link to="/auth/signin" className="inline-block text-3xl px-4 py-2 font-semibold leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Log in</Link>
        </div>
      </div>
    </nav>
  );
}
