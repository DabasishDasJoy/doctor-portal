import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useToken from "../../hooks/useToken";
const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  const [token] = useToken(userEmail);

  if (token) {
    toast.success("User successfully created");
    navigate("/");
  }

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((res) => {
        updateUser({ displayName: data.name })
          .then(() => {
            saveUser(data.email, data.name);
          })
          .catch((err) => toast.error(err));
      })
      .catch((err) => console.log(err));
  };

  const saveUser = (email, userName) => {
    const user = { email, userName };

    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(() => {
        console.log(email);
        setUserEmail(email);
      })
      .catch((err) => toast.error(err));
  };
  return (
    <div>
      <div className="flex justify-center items-center w-full  h-[800px]">
        <div className="shadow-md p-7 rounded-2xl  w-96">
          <h2 className="text-xl text-center">Sign Up</h2>
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
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full"
                {...register("password")}
              />
              <label className="label">
                <Link className="label-text-alt">Forgot Password?</Link>
              </label>
            </div>

            <input
              type="submit"
              value={"Login"}
              className="input input-bordered w-full bg-accent text-white"
            />
            <label className="label justify-center">
              <span className="label-text-alt ">
                Already have an account?{" "}
                <Link className="text-secondary" to={"/login"}>
                  Login
                </Link>
              </span>
            </label>
          </form>

          <div className="divider">OR</div>
          <button className="uppercase btn btn-outline w-full">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
