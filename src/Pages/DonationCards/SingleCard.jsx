import { Link } from "react-router-dom";

const SingleCard = ({ card }) => {
    const { id, picture, category, title, card_bg_color, category_bg_color, text_button_bg } = card;

    const bgColor = {
        backgroundColor: card_bg_color,
    };

    const btnBgColor = {
        backgroundColor: category_bg_color,
        color: text_button_bg,
    };

    const titleColor = {
        color: text_button_bg,
    };
    return (
        <div>
            <Link to={`/donationDetails/${id}`}>
                <div className="shadow-xl rounded-2xl" style={bgColor}>
                    <figure>
                        <img
                            src={picture}
                            className="h-[260px] md:h-[200px] w-full rounded-t-2xl"
                            alt="Card Thumbnail"
                        />
                    </figure>
                    <div className="card-body p-5">
                        <p
                            className="px-3 py-1 font-semibold rounded-md max-w-fit"
                            style={btnBgColor}
                        >
                            {category}
                        </p>
                        <p className="text-xl font-semibold" style={titleColor}>
                            {title}
                        </p>

                        <div className="card-actions"></div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleCard;
