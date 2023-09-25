import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import PropTypes from "prop-types";

const DonationCards = ({ inputValue }) => {
    const [displayCard, setDisplayCard] = useState([]);
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch("/DonationData.json")
            .then((res) => res.json())
            .then((data) => setCards(data));

        if (inputValue.toLowerCase() === "all") {
            setDisplayCard(cards);
        } else if (inputValue.toLowerCase() === "health") {
            const healthCards = cards.filter((card) => card.category === "Health");
            setDisplayCard(healthCards);
        } else if (inputValue.toLowerCase() === "education") {
            const EducationCards = cards.filter((card) => card.category === "Education");
            setDisplayCard(EducationCards);
        } else if (inputValue.toLowerCase() === "clothing") {
            const clothingCards = cards.filter((card) => card.category === "Clothing");
            setDisplayCard(clothingCards);
        } else if (inputValue.toLowerCase() === "food") {
            const foodCards = cards.filter((card) => card.category === "Food");
            setDisplayCard(foodCards);
        }
    }, [cards, inputValue]);

    return (
        <div className="my-24">
            <div className="grid grid-cols-4 gap-5">
                {displayCard.map((card) => (
                    <SingleCard key={card.id} card={card}></SingleCard>
                ))}
            </div>
        </div>
    );
};
DonationCards.propTypes = {
    inputValue: PropTypes.string,
};
export default DonationCards;
