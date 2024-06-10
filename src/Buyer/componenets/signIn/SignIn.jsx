import React from "react";
import { useForm } from "react-hook-form";
import "./signIn.css";
import { Link  } from "react-router-dom";


export default function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
   
  } = useForm();

  let signIn = (data) => {
        reset();
  };

  return (
    <>

      <div className="topContainer  flex justify-center items-center overflow-auto h-screen">
        <div className="containerBox m-auto ">
          <div className="images  h-full w-3/6 flex flex-col justify-center items-center">
            <Link to={'/'}>
            <img
              src="src/assets/images/big-logo.png"
              alt=""
              className="anudaLogo "
            />
             </Link> 
            <img
              src="src/assets/images/Mobile-login.jpg"
              alt=""
              className="mobileImg mt-6"
            />
          </div>

          <div className="signupForm h-full w-3/6 flex  items-center flex-col px-4">
            <h1 className="text-3xl self-start mb-3 font-semibold">Sign In</h1>

            <form className="w-full" onSubmit={handleSubmit(signIn)}>
              <div className="mb-3">
                <input
                  type="text"
                  name=""
                  id=""
                  {...register("emailOrMob", {
                     pattern: {value: /^\d{10}$|^[^\s@]+@[^\s@]+\.[^\s@]+$/, message:'Enter a valid email or number'}
                })}
                  placeholder="Email Or Mobile Number"
                  className="form-control "
                />

                {errors.emailOrMob && <p className="text-red-500 mt-1 mx-1">{errors.emailOrMob?.message}</p>}

              </div>

              <button
                type="submit"
                className="bg-red-500 rounded-3xl transition ease-in-out delay-100  hover:bg-black  text-white w-full h-10"
              >
                Sign In
              </button>
            </form>
            <div className="termsAndCondition self-start mt-5 font-medium">
              <p className="text-sm">
                By creating an account or logging in, you agree
              </p>
              <p className="text-sm">
                to Anuda Mart{" "}
                <a className="text-red-500 cursor-pointer">Conditions of Use</a>{" "}
                and <a className="text-red-500 cursor-pointer">Privacy</a>
              </p>
              <p className="text-sm">
                <a className="text-red-500 cursor-pointer">Policy.</a>
              </p>
            </div>

            <div className="createAnudaMart mt-3 flex flex-col w-full justify-center items-center">

              <div className="container">
                <div className="line"></div>
                <div className="text">New To Anuda Mart</div>
                <div className="line"></div>
              </div>
              <Link to={'/sign-up'} className="w-full">
              <button  className="rounded-3xl mt-3 transition ease-in-out delay-100 bg-black font-bold text-white w-full h-10">
                Create Your Anuda Mart Account
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
