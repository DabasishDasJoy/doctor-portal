import React from "react";
import { useForm } from "react-hook-form";

const AddDoctor = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (d) => {
    console.log(d);
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
                  className="input input-bordered w-full"
                  {...register("speciality")}
                />
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
