import React from "react";
import appoinment from "../../../assets/images/appointment.png";
import doctor from "../../../assets/images/doctor-small.png";
const MakeAppoinment = () => {
  return (
    <div
      className="hero mx-5 text-white mt-20"
      style={{ background: `url(${appoinment})` }}
    >
      <div className="hero-content  flex-col lg:flex-row p-0">
        <img src={doctor} className=" -mt-24 hidden lg:block" alt="" />
        <div className="p-10">
          <h1 className="text-primary">Appoinment</h1>
          <h1 className="text-5xl font-bold">Make an Appoinment</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MakeAppoinment;
