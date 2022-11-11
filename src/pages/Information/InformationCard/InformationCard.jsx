import React from "react";
const InformationCard = ({ card: { data, bg, icon } }) => {
  return (
    <div
      className={`card lg:w-[450px] lg:h-[190px] lg:px-5 py-5 ${bg} text-primary-content lg:flex-row items-center mx-auto`}
    >
      <img src={icon} alt="" />
      <div className="card-body text-white">
        <h2 className="card-title ">{data}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default InformationCard;
