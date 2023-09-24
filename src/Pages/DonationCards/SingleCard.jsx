const SingleCard = ({ card }) => {
    console.log(card);
    const { picture, category, title, card_bg_color, category_bg_color, text_button_bg } = card;
    console.log(card_bg_color);
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
            <div className="shadow-xl rounded-2xl" style={bgColor}>
                <figure>
                    <img src={picture} alt="Card Thumbnail" />
                </figure>
                <div className="card-body p-5">
                    <p className="px-3 py-1 font-semibold rounded-md max-w-fit" style={btnBgColor}>
                        {category}
                    </p>
                    <p className="text-xl font-semibold" style={titleColor}>
                        {title}
                    </p>

                    <div className="card-actions"></div>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;
