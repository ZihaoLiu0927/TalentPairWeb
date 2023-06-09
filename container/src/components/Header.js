import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

export default function Header( { isSignedIn, onSignOut } ) {

  const onClick = () => {
    if ( isSignedIn && onSignOut) {
      onSignOut();
    }
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-emerald-950 p-14 rounded-sm">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} className="fill-current h-40 w-40 mr-2" /> 
        <span className="font-semibold text-xl tracking-tight"></span>
      </div>
      <div className="flex-grow flex items-center w-auto">
        <div className="text-sm flex-grow"></div>

        <div className="inline-block mr-16">
          <Link to='/' className="inline-block mt-2 text-3xl font-semibold text-cyan-400 hover:text-white mr-8"> Home
          </Link>

          <Link to='/applicant' className="inline-block mt-2 text-3xl font-semibold text-cyan-400 hover:text-white mr-8"> Applicant Demo
          </Link>

          <Link to='/recruiter' className="inline-block mt-2 text-3xl font-semibold text-cyan-400 hover:text-white mr-8">  Recruiter Demo
          </Link>
        </div>
        <div>
          <Link to={isSignedIn ? '/' : '/auth/signin'} onClick={onClick} className="inline-block text-3xl px-4 py-2 font-semibold leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4">
            {isSignedIn ? 'Logout' : 'Login'}
          </Link>
        </div>
      </div>
    </nav>
  );
}
