import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const BookingModal = ({
  setTreatment,
  treatment: { name: treatmentName, slots },
  selectedDate,
  refetch,
}) => {
  const { user } = useContext(AuthContext);
  const date = format(selectedDate, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const phone = form.phone.value;
    const name = form.name.value;
    const appoinmentDate = date;
    const slot = form.slot.value;

    const booking = {
      date: date,
      treatment: treatmentName,
      email,
      name,
      appoinmentDate,
      slot,
      phone,
      price: 90,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Booking successful");
          refetch();
        } else {
          toast.error(data.message);
        }
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{treatmentName}</h3>
          <form onSubmit={handleBooking} className="py-4 flex flex-col gap-3">
            <input
              disabled
              defaultValue={format(selectedDate, "PP")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, idx) => (
                <option key={idx}>{slot}</option>
              ))}
            </select>
            <input
              disabled
              defaultValue={user?.displayName}
              type="text"
              name="name"
              className="input input-bordered w-full "
            />
            <input
              name="email"
              disabled
              type="email"
              defaultValue={user?.email}
              className="input input-bordered w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input
              type="submit"
              value={"Submit"}
              className="input input-bordered w-full bg-accent text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
