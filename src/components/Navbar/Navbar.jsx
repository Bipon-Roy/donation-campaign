import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/Logo.png";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <nav className="navbar ">
                <div className="flex-1 ">
                    <img src={logo} alt="NavLogo" className="w-2/3 md:w-auto" />
                </div>
                <div className="flex-none">
                    <ul className=" menu-horizontal px-1">
                        <li className=" text-[#0B0B0B] mr-3  md:mr-8">
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li className=" text-[#0B0B0B] mr-3 md:mr-8">
                            <NavLink to="/donation">Donation</NavLink>
                        </li>

                        <li className=" text-[#0B0B0B] mr-3 md:mr-8">
                            <NavLink to="/statistics">Statistics</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
