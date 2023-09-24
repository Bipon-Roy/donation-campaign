import { NavLink } from "react-router-dom";
import logo from "../../assets/Images/Logo.png";
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="navbar ">
                <div className="flex-1">
                    <img src={logo} alt="NavLogo" />
                </div>
                <div className="flex-none">
                    <ul className=" menu-horizontal px-1">
                        <li className=" text-[#0B0B0B] mr-8">
                            <NavLink to="/">Home</NavLink>
                        </li>

                        <li className=" text-[#0B0B0B] mr-8">
                            <NavLink to="/">Donation</NavLink>
                        </li>

                        <li className=" text-[#0B0B0B] mr-8">
                            <NavLink to="/">Statistics</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
