import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const DonationCards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch("/DonationData.json")
            .then((res) => res.json())
            .then((data) => setCards(data));
    }, []);

    return (
        <div className="my-24">
            <div className="grid grid-cols-4 gap-5">
                {cards.map((card) => (
                    <SingleCard key={card.id} card={card}></SingleCard>
                ))}
            </div>
        </div>
    );
};

export default DonationCards;
