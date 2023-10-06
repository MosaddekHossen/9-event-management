import { NavLink } from "react-router-dom";

const Header = () => {
    const navLink = <>
        <ul tabIndex={0} className="menu menu-horizontal px-1 flex gap-5">
            <li><NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-blue-400 hover:bg-orange-500 text-white font-bold" : ""
                }
            >
                Home
            </NavLink></li>
            <li><NavLink
                to="/d"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-stone-400 text-white font-bold" : ""
                }
            >
                About
            </NavLink></li>
            <li><NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "bg-stone-400 text-white font-bold" : ""
                }
            >
                Blogs
            </NavLink></li>
        </ul>
    </>
    const navLinkMd = <>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 3</a></li>
        </ul>
    </>
    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        {navLinkMd}
                    </div>
                    <a className="normal-case text-3xl font-bold text-white">Education</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {navLink}
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-primary btn-circle avatar">
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