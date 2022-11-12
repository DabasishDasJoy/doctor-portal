import { format } from "date-fns";
import React from "react";

const AvailableAppoinment = ({ selectedDate }) => {
  return (
    <p className="text-secondary my-16 text-center font-bold text-base">
      Available Appoinment on {format(selectedDate, "PP")}.
    </p>
  );
};

export default AvailableAppoinment;
