import Banner from "../../components/Banner/Banner";
import DonationCards from "../DonationCards/DonationCards";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="max-w-7xl mx-auto">
                <DonationCards />
            </div>
        </div>
    );
};

export default Home;
