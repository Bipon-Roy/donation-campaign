import { Link } from "react-router-dom";

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
        <div className="rounded-lg flex gap-6" style={bgColor}>
            <div>
                <img
                    src={picture}
                    className="h-[190px] w-[220px] rounded-l-lg"
                    alt="DonatedCard Thumbnail"
                />
            </div>
            <div className="mt-6 space-y-1">
                <p className="px-3 py-1 font-semibold rounded-md max-w-fit mb-2" style={catBgColor}>
                    {category}
                </p>
                <h1 className="text-[#0B0B0B] font-semibold text-2xl">{title}</h1>
                <p className="font-semibold text-base" style={priceColor}>
                    ${price}
                </p>
                <Link to={`/donationDetails/${id}`}>
                    <button
                        className="text-white text-lg font-semibold px-4 py-1 rounded-md my-3"
                        style={btnBg}
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default DonatedCard;
