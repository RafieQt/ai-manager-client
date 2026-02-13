import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../images/logo.jpg'


const Navbar = () => {



    const profileLinks = <>
        <li>Name</li>
        <li>email</li>
        <li><Link>Model Purchase Page</Link></li>
        <li><Link>My Models</Link></li>
        <li><Link>Logout</Link></li>
    </>


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
                        <NavLink to="/add-models">Add Models</NavLink>
                        <NavLink to="/all-models">All Model</NavLink>
                        <NavLink to="/signin">Sign in</NavLink>
                    </div>

                    {/* 3. Profile Dropdown (Right) */}
                    <div className="flex-1 flex justify-end"> {/* Use flex-1 and justify-end to balance the sides */}
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="User Profile" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {profileLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;