import React from "react";

const AppoinmentOption = ({
  appoinmentOption,
  setTreatment,
  appoinmentOption: { name, slots },
}) => {
  return (
    <div className="card w-96 rounded-2xl shadow-md">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>{slots.length ? slots[0] : "Try another time"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-end">
          <label
            onClick={() => setTreatment(appoinmentOption)}
            htmlFor="booking-modal"
            className="btn border-none text-white bg-gradient-to-r from-secondary to-primary"
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentOption;
