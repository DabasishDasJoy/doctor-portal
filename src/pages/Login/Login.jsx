import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const Login = () => {
  const { register, handleSubmit } = useForm();

  const { login } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    login(data.email, data.password)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };
  return (
    <div className="flex justify-center items-center w-full  h-[800px]">
      <div className="shadow-md p-7 rounded-2xl  w-96">
        <h2 className="text-xl text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              New to Doctors Portal?{" "}
              <Link className="text-secondary" to={"/register"}>
                Create New Account
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
  );
};

export default Login;
