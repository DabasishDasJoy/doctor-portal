import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();

  const { data: specialities = [] } = useQuery({
    queryKey: ["speciality"],
    queryFn: () =>
      fetch("http://localhost:5000/appoinmentSpeciality").then((res) =>
        res.json()
      ),
  });

  const onSubmit = (d) => {
    const image = d.image[0];
    // Image upload
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imageHosting}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const doctor = {
            name: d.name,
            email: d.email,
            speciality: d.speciality,
            imageUrl: data.data.url,
          };

          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success(`${data.name} added successfully`);
              }
            });
        }
        console.log(data.data.url);
      });
  };

  return (
    <div>
      <div className="text-4xl">Add Doctor</div>

      <div>
        <div className="flex justify-center items-center w-full  h-[800px]">
          <div className="shadow-md p-7 rounded-2xl  w-96">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full"
                  {...register("name")}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  className="input input-bordered w-full"
                  {...register("email")}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Speciality</span>
                </label>
                <select
                  className="select w-full max-w-xs select-bordered"
                  {...register("speciality")}
                >
                  {specialities.map((specility) => (
                    <option key={specility._id}>{specility.name}</option>
                  ))}
                </select>
                {/* <select className="input input-bordered w-full" /> */}
              </div>
              <div className="form-control w-full mt-4">
                {/* <label className="label">
                  <span className="label-text">Speciality</span>
                </label> */}
                <input
                  type="file"
                  className="input input-bordered w-full"
                  {...register("image")}
                />
              </div>

              <input
                type="submit"
                value={"Add"}
                className="input input-bordered w-full bg-accent text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
