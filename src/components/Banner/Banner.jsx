import { useState } from "react";
import useInputState from "../../Hook/useInputState";
import DonationCards from "../../Pages/DonationCards/DonationCards";

const Banner = () => {
    const [inputValue, setInputValue] = useState("all");
    const inputState = useInputState();
    const handleSubmit = (e) => {
        e.preventDefault();
        setInputValue(inputState.value);
    };
    return (
        <div>
            <div
                className=" h-[60vh]"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)),url(https://i.ibb.co/GPYzyh3/Banner-Bg.png)",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="">
                    <div className="flex justify-center pt-40 ">
                        <h1 className="mb-5 text-5xl font-bold text-[#0B0B0B]">
                            I Grow By Helping People In Need
                        </h1>
                    </div>
                    <div className="flex justify-center mt-8">
                        <form onSubmit={handleSubmit}>
                            <input
                                {...inputState}
                                type="text"
                                name="category"
                                placeholder="Search here...."
                                className="bg-white border-[#DEDEDE] border-2 border-r-0 py-4 pl-4 pr-40 rounded-l-lg"
                            />
                            <input
                                type="submit"
                                value="Search"
                                className="px-7 py-4 bg-[#FF444A] text-white font-semibold text-lg rounded-r-lg"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <DonationCards inputValue={inputValue}></DonationCards>
            </div>
        </div>
    );
};

export default Banner;
