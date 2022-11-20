import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Checkout from "../Checkout/Checkout";

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();

  const stripePromise = loadStripe(
    "pk_test_51M5wKgL6Av66sfDxrzKdiKXsSRTZkWEdHicVQ2SJK4geG6P8qpBlbl9lvjs3L6cwo9EYsZPA4XEPDoKylGzlcX1N00MsGExXk1"
  );
  if (navigation.state == "loading") {
    <h1>Loading</h1>;
  }
  return (
    <div>
      <h2 className="text-4xl">Payment : {booking.treatment}</h2>
      <Elements stripe={stripePromise}>
        <Checkout booking={booking} />
      </Elements>
    </div>
  );
};

export default Payment;
