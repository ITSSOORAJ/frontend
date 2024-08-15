
import React from 'react'
import { Link } from 'react-router-dom';
import Loginform from '../components/loginform';

 function Login(props) {
  return (
    <main>
      <section>
    
      <div className='mb-10 mt-40'>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
       <p className='mt-2 text-center text-sm text-gray-600 mt-5'>Don't have an account yet? <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
                Signup
            </Link>
            </p>
        <Loginform />
        </div>
        </section>
    </  main>
  )
}

export default Login;