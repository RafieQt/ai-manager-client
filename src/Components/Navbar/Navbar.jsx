import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../images/logo.jpg'
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';


const Navbar = () => {

    const { user, logoutUser } = use(AuthContext);

    const handleLogout = () => {
        toast("logout");
        logoutUser();

    }




    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm ">
                <div className='flex justify-between items-center w-7xl mx-auto'>
                    {/* 1. Logo (Left) */}
                    <div className="flex-1">
                        <Link to="/"><img className='h-10 w-10' src={logo} alt="Logo" /></Link>
                    </div>

                    {/* 2. NavLinks (Center) - Remove the wrapper that was grouping this with the profile */}
                    <div className='flex items-center gap-4'>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/add-model">Add Model</NavLink>
                        <NavLink to="/models">All Models</NavLink>
                        
                    </div>

                    {/* 3. Profile Dropdown (Right) */}
                    <div className="flex-1 flex justify-end"> {/* Use flex-1 and justify-end to balance the sides */}
                        {
                            user ? <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img alt="User Profile" src={user?.photoURL || logo} />
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li className='text-center'>{user?.displayName || 'noName'}</li>
                                    <li className='text-center'>{user.email}</li>
                                    <li><Link to='mypurchases'>Model Purchase Page</Link></li>
                                    <li><Link to='mymodels'>My Models</Link></li>
                                    <li><Link onClick={handleLogout}>Logout</Link></li>
                                </ul>
                            </div> :
                                <Link to='/signin' className='btn'>Sign In</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;