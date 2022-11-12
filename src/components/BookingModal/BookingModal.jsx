import { format } from "date-fns";
import React from "react";

const BookingModal = ({
  setTreatment,
  treatment: { name, slots },
  selectedDate,
}) => {
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const phone = form.phone.value;
    const name = form.name.value;
    const serviceName = name;
    const appoinmentDate = selectedDate;
    const slot = form.slot.value;

    const booking = {
      email,
      name,
      serviceName,
      appoinmentDate,
      slot,
      phone,
    };
    console.log(booking);
    setTreatment(null);
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
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit={handleBooking} className="py-4 flex flex-col gap-3">
            <input
              disabled
              defaultValue={format(selectedDate, "PP")}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <select name="slot" className="select select-bordered w-full">
              <option disabled selected>
                Who shot first?
              </option>
              {slots.map((slot, idx) => (
                <option key={idx}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full "
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full "
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
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
