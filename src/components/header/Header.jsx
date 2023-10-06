import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

const Header = () => {
    const navLink = <>
        <ul className="menu menu-horizontal px-1 md:flex gap-5 hidden">
            <li>
                <NavLink to={'/'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={'/details'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}                        >
                    Details
                </NavLink>
            </li>
            <li>
                <NavLink to={'/detals'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}>
                    Two
                </NavLink>
            </li>
            <li>
                <NavLink to={'/dff'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}                        >
                    Login
                </NavLink>
            </li>
        </ul>
    </>
    const navLinkMd = <>
        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
            <li>
                <NavLink to={'/'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to={'/'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] my-3 hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}                        >
                    One
                </NavLink>
            </li>
            <li>
                <NavLink to={'/'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}>
                    Two
                </NavLink>
            </li>
            <li>
                <NavLink to={'/'}
                    className={({ isActive, isPending }) =>
                        isPending ? 'pending' : isActive ? 'bg-[#a433aa] hover:text-blue-400 font-bold py-2 px-5 rounded-md text-white' : ''}                        >
                    Login
                </NavLink>
            </li>
        </ul>
    </>
    return (
        <div className="max-w-7xl mx-auto sticky top-0 z-50">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-white font-black w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {navLinkMd}
                    </div>
                    <Link to='/'><a className="normal-case text-3xl font-bold text-[#6531ae]">Education</a></Link>
                </div>
                <div className="navbar-center bg-white px-12 rounded-lg lg:flex">
                    {navLink}
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-secondary btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://cdn4.buysellads.net/uu/1/127419/1670531697-AdobeTeams.jpg" />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;