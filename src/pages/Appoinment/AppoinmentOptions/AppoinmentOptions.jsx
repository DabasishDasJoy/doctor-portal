import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "../../../components/BookingModal/BookingModal";
import AppoinmentOption from "../AppoinmentOption/AppoinmentOption";

const AppoinmentOptions = ({ selectedDate }) => {
  // const [appoinmentOptions, setAppoinmetOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const { data: appoinmentOptions = [], isLoading } = useQuery({
    queryKey: ["appoinmentOptions"],
    queryFn: () =>
      fetch("http://localhost:5000/appoinmentOptions").then((res) =>
        res.json()
      ),
  });

  // useEffect(() => {
  //   fetch("http://localhost:5000/appoinmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppoinmetOptions(data));
  // }, []);
  return (
    <section>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {appoinmentOptions.map((appoinmentOption) => (
          <AppoinmentOption
            key={appoinmentOption._id}
            appoinmentOption={appoinmentOption}
            setTreatment={setTreatment}
          ></AppoinmentOption>
        ))}
      </div>

      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </section>
  );
};

export default AppoinmentOptions;
