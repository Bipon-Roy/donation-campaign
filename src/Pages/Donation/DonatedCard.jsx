import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DonatedCard = ({ card }) => {
    const {
        id,
        picture,
        category,
        title,
        card_bg_color,
        category_bg_color,
        price,
        text_button_bg,
    } = card;

    const bgColor = {
        backgroundColor: card_bg_color,
    };

    const catBgColor = {
        backgroundColor: category_bg_color,
        color: text_button_bg,
    };
    const btnBg = {
        backgroundColor: text_button_bg,
    };

    const priceColor = {
        color: text_button_bg,
    };

    return (
        <div className="rounded-lg flex flex-col lg:flex-row gap-6" style={bgColor}>
            <div>
                <img
                    src={picture}
                    className="md:h-[220px] md:w-full lg:w-[220px] rounded-t-lg lg:rounded-l-lg lg:rounded-r-none"
                    alt="DonatedCard Thumbnail"
                />
            </div>
            <div className="mt-6 space-y-2 mx-4 my-8 md:mx-5 lg:mx-0">
                <p className="px-3 py-1 font-semibold rounded-md max-w-fit mb-2" style={catBgColor}>
                    {category}
                </p>
                <h1 className="text-[#0B0B0B] font-semibold text-2xl">{title}</h1>
                <p className="font-semibold text-base" style={priceColor}>
                    ${price}
                </p>
                <Link to={`/donationDetails/${id}`}>
                    <button
                        className="text-white text-lg font-semibold px-4 py-1 rounded-md mt-5"
                        style={btnBg}
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};
DonatedCard.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    card: PropTypes.object,
};
export default DonatedCard;
