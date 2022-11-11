import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
const InformationCard = () => {
  return (
    <div className="flex justify-between">
      <div className="card w-[450px] h-[190px] px-5 bg-primary text-primary-content flex-row items-center">
        <AiOutlineClockCircle className="w-20 h-20"></AiOutlineClockCircle>

        <div className="card-body">
          <h2 className="card-title">Opening Hours</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="card w-[450px] h-[190px] px-5 bg-slate-700 text-primary-content flex-row items-center">
        <MdLocationOn className="w-20 h-20"></MdLocationOn>

        <div className="card-body">
          <h2 className="card-title">Visit Our Location</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
      <div className="card w-[450px] h-[190px] px-5 bg-slate-700 text-primary-content flex-row items-center">
        <BsTelephone className="w-20 h-20"></BsTelephone>

        <div className="card-body">
          <h2 className="card-title">Contact Us</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default InformationCard;
