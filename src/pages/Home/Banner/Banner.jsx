import React from "react";
import bg from "../../../assets/images/bg.png";
import banner from "../../../assets/images/chair.png";
import ButtonPrimary from "../../../components/ButtonPrimary/ButtonPrimary";

const Banner = () => {
  return (
    <div className={`hero`} style={{ backgroundImage: `url(${bg})` }}>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} className=" rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <ButtonPrimary></ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default Banner;
