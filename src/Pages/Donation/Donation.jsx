import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStorageData } from "../../utility/localStorage";
import DonatedCard from "./DonatedCard";

const Donation = () => {
    const [dataLength, setDataLength] = useState(4);

    const donationData = useLoaderData();

    const [appliedDonation, setAppliedDonation] = useState([]);
    useEffect(() => {
        const storedDonationIds = getStorageData();

        if (donationData.length > 0) {
            const donationApplied = [];
            for (const id of storedDonationIds) {
                const donation = donationData.find((donation) => donation.id === id);

                if (donation) {
                    donationApplied.push(donation);
                }
            }
            setAppliedDonation(donationApplied);
        }
    }, [donationData]);

    const isfalse = appliedDonation.length === 0;

    return isfalse ? (
        <div className="flex justify-center items-center h-[60vh]">
            <p className="text-4xl font-bold">No Donation History Found!!!</p>
        </div>
    ) : (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10 md:mt-20 mx-5 lg:mx-0">
                {appliedDonation.slice(0, dataLength).map((donation) => (
                    <DonatedCard key={donation.id} card={donation}></DonatedCard>
                ))}
            </div>
            <div
                className={`${
                    dataLength === appliedDonation.length ? "hidden" : ""
                } flex justify-center mt-8`}
            >
                <button
                    onClick={() => setDataLength(appliedDonation.length)}
                    className="px-6 py-3 text-white bg-[#009444] rounded-lg font-semibold"
                >
                    See All
                </button>
            </div>
        </div>
    );
};

export default Donation;
