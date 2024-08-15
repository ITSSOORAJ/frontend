import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <div className="flex h-screen">
      <img
        src="https://cdn.dribbble.com/users/1785433/screenshots/14967930/media/3436e5202a2f733cd5316be32a26abd7.gif"
        alt="Descriptive image alt text"
        className="w-1/2 h-full object-cover"
      />
      <div className="w-1/2 flex flex-col justify-center items-center">
       
        <h1 className="text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">LIBTOX</h1>
        <p className="text-lg font-bold mt-0 italic">where reading begins....</p>
        <h4 className='text-lg font-bold mt-80 italic'>Wanna explore more..? then</h4>
       <div class="flex mt-3">
       <Link to="/login"> <button type="button" class="w-32 h-10 rounded font-bold italic  hover:text-white bg-gradient-to-r from-pink-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ...">
          Login
          </button></Link>
          <Link to="/signup">
          <button type="button" class="w-32 h-10 ml-2 rounded font-bold italic hover:text-white bg-gradient-to-r from-pink-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 ...">
          Signup
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
