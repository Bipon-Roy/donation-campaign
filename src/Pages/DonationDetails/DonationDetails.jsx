import { useLoaderData, useParams } from "react-router-dom";
import { setStorageData } from "../../utility/localStorage";

const DonationDetails = () => {
    const donations = useLoaderData();
    const { id } = useParams();

    const idInt = parseInt(id);
    const donation = donations.find((card) => card.id === idInt);
    const btnBg = {
        backgroundColor: donation.text_button_bg,
    };
    const handleDonation = () => {
        setStorageData(idInt);
    };
    return (
        <div className="max-w-7xl mx-auto mb-16">
            <div
                className="my-8 md:my-16 flex justify-center relative"
                style={{
                    overflow: "hidden",
                }}
            >
                <div
                    className="absolute inset-x-0 bottom-0 rounded-b-xl"
                    style={{
                        background: "linear-gradient(rgba(13, 14, 14, 0.5), rgba(0, 0, 0, 0.5))",
                        height: "25%",
                    }}
                ></div>
                <img
                    src={donation.picture}
                    className="w-full h-[364px] md:h-[720px] lg:rounded-xl"
                    alt="Card Thumbnail"
                />
            </div>

            <div className="absolute bottom-[380px] md:bottom-4 lg:bottom-28">
                <button
                    onClick={handleDonation}
                    className="text-white md:text-xl font-semibold px-4 py-2 md:px-6 md:py-3 ml-10"
                    style={btnBg}
                >
                    Donate ${donation.price}
                </button>
            </div>

            <div className="space-y-4 mx-5 lg:mx-0">
                <h1 className="text-[#0B0B0B] text-4xl font-bold capitalize">{donation.title}</h1>
                <p> {donation.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;
