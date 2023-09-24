const Banner = () => {
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
                        <input
                            className="bg-white border-[#DEDEDE] border-2 pl-4 pr-40 rounded-l-lg"
                            type="text"
                            placeholder="Search here...."
                        />
                        <button className="px-7 py-4 bg-[#FF444A] text-white font-semibold text-lg rounded-r-lg">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
