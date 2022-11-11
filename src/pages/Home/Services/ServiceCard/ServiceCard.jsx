import React from "react";

const ServiceCard = ({ service: { icon, title } }) => {
  return (
    <div
      className={`card lg:w-[440px] lf:h-[310px] px-5 bg-white  text-primary-content  rounded-2xl shadow-md mx-auto`}
    >
      <img className="text-primary w-[116px] mx-auto" src={icon} alt="" />
      <div className="card-body text-black text-center lg:px-5 px-2">
        <h2 className="">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default ServiceCard;
