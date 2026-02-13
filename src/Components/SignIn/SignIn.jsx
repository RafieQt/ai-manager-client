import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
// import { Link, useNavigate, useLocation } from 'react-router';

const SignIn = () => {
    const { googleLogin, logInUser, setUser} = use(AuthContext);
    const navigate = useNavigate();
    // const location = useLocation();

    // Requirement: Navigate user to their desired route (stored in URL) or Home 

    const handleLogin = (e)=>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logInUser(email, password)
        .then(res=> {
            const user = res.user;
            console.log(user);
            navigate('/');

        }).catch(error=>{
            const errorCode = error.code;
            console.log(errorCode); 

        })
    }

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                const user =result.user;
                setUser(user);
                console.log(user);
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
                    <form onSubmit={handleLogin} action="">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input" placeholder="Email" required/>
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" required/>
                            <div>Don't have an account? <Link className='text-blue-600' to='/register'>Register</Link></div>
                            {/* <button type='submit' className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer transition">Login</button> */}
                            <input type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 cursor-pointer transition" value="Login" />
                        </fieldset>
                    </form>
                    <button onClick={handleGoogleSignIn} className="w-full mt-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 cursor-pointer transition">

                        Login with Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default SignIn;