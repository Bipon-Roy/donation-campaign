import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Error = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar />
            <div className="flex flex-col justify-center items-center h-[70vh]">
                <h1 className="text-[4rem] text-[#FF444A] mb-3">404!</h1>
                <h1 className="text-3xl font-semibold text-center">
                    Nothing Founds In this Page!!!
                </h1>
                <Link to="/">
                    <button className="px-7 py-3 text-white font-medium bg-[#FF444A] mt-6 rounded-md">
                        Go Back
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Error;
