import React from "react";
import InfoCards from "../../Information/InformationCards/InfoCards";
import Banner from "../Banner/Banner";
import Hero from "../Hero/Hero";
import MakeAppoinment from "../MakeAppoinment/MakeAppoinment";
import Services from "../Services/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <Hero></Hero>
      <MakeAppoinment></MakeAppoinment>
    </div>
  );
};

export default Home;
