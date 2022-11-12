import React from "react";
import { DayPicker } from "react-day-picker";
import bg from "../../../assets/images/bg.png";
import banner from "../../../assets/images/chair.png";
const AppoinmentBanner = ({ selectedDate, setSelectedDate }) => {
  // data picker state

  return (
    <div className={`hero`} style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-content flex-col justify-between lg:flex-row-reverse">
        <img src={banner} className=" rounded-lg shadow-2xl lg:w-1/2" alt="" />
        <div className="w-full">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentBanner;
