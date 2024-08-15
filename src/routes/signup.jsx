
import React from 'react'
import { Link } from 'react-router-dom';
import Signupform from '../components/signupform';

 function Signup(props) {
  return (
    <main>
      <section>
    
      <div className='mb-10 mt-40'>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
       <p className='mt-2 text-center text-sm text-gray-600 mt-5'> have an account? then <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500">
                Login 
            </Link>
            </p>
        <Signupform />
        </div>
        </section>
    </  main>
  )
}

export default Signup;