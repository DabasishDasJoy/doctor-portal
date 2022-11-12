import React, { useState } from "react";
import AvailableAppoinment from "../../AvailableAppoinment/AvailableAppoinment";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import AppoinmentOptions from "../AppoinmentOptions/AppoinmentOptions";

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AppoinmentBanner>
      <AvailableAppoinment selectedDate={selectedDate}></AvailableAppoinment>
      <AppoinmentOptions selectedDate={selectedDate}></AppoinmentOptions>
    </div>
  );
};

export default Appoinment;
