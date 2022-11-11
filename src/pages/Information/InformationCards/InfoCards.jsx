import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InformationCard from "../InformationCard/InformationCard";
const InfoCards = () => {
  const cards = [
    {
      id: 1,
      data: "Visit our location at",
      bg: "bg-gradient-to-r from-secondary to-primary",
      icon: clock,
    },
    {
      id: 2,
      data: "Visit our location at",
      bg: "bg-gray-600",
      icon: marker,
    },
    {
      id: 1,
      data: "Visit our location at",
      bg: "bg-gradient-to-r from-secondary to-primary",
      icon: phone,
    },
  ];
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5 px-2">
      {cards.map((card) => (
        <InformationCard key={card.id} card={card}></InformationCard>
      ))}
    </div>
  );
};

export default InfoCards;
