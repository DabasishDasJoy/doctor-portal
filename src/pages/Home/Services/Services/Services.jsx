import React from "react";
import cavity from "../../../../assets/images/cavity.png";
import fluoride from "../../../../assets/images/fluoride.png";
import whitenning from "../../../../assets/images/whitening.png";

import ServiceCard from "../ServiceCard/ServiceCard";
const Services = () => {
  const services = [
    {
      icon: fluoride,
      title: "Fluoride Treatment",
      id: 1,
    },
    {
      icon: cavity,
      title: "Cavitiy Filling",
      id: 2,
    },
    {
      icon: whitenning,
      title: "Teeth Whitennig",
      id: 3,
    },
  ];
  return (
    <div className="mt-16 px-2">
      <div className="text-center">
        <p className="text-2xl text-primary uppercase ">Our services</p>
        <h1 className="text-3xl">Service We Provide</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5 mt-16">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
