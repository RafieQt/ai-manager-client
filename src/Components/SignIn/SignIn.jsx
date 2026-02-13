import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
// import { Link, useNavigate, useLocation } from 'react-router';

const SignIn = () => {
    const{signInWithGoogle} = use(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();

    // Requirement: Navigate user to their desired route (stored in URL) or Home 
   

    const handleGoogleSignIn = () => {
           signInWithGoogle()
               .then(result => {
                   console.log(result);
               })
               .catch((error) => {
                   console.log(error);
               });
       }

    return (
        <div className=''>
   
   
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto mt-30 mb-50 ">
                   <h1 className="text-3xl text-center mt-2 font-bold">Login now!</h1>
                   <div className="card-body">
                       <fieldset className="fieldset">
                           <label className="label">Email</label>
                           <input type="email" className="input" placeholder="Email" />
                           <label className="label">Password</label>
                           <input type="password" className="input" placeholder="Password" />
                           <div>Don't have an account? <Link className='text-blue-600' to='/register'>Register</Link></div>
                           <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer transition">Login</button>
                       </fieldset>
                       <button onClick={handleGoogleSignIn} className="w-full mt-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 cursor-pointer transition">
                           
                           Login with Google
                       </button>
                   </div>
               </div>
   
           </div>
    );
};

export default SignIn;