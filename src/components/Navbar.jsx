import { Link, NavLink } from "react-router-dom";
import defaultUserImg from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact us</NavLink></li>
        <li><NavLink to="/offer">Offers</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>

    return (
        <div>
            <ToastContainer/>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="cursor-pointer text-4xl text-white font-custom font-bold">Moment Bazz</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={defaultUserImg} alt="" />
                        </div>
                    </label>
                    {
                        user ?
                            <button onClick={handleLogOut} className="btn">Log out</button>
                            :
                            <Link to="/login">
                                <button className="btn">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;