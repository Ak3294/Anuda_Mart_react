import React, { useState } from "react";
import "./SignUp.css";
import { useForm} from "react-hook-form"
import { Link } from "react-router-dom";



export default function SignUp() {


    const { register, handleSubmit , reset , formState: { errors } , watch} = useForm();
    const [formData , setFormData] = useState({})
    const watchShowAge = watch("fullName", false); 
    let submitForm = (data)=>{
        console.log(data);
        setFormData(data)
        reset()
    }
    // console.log(errors);

    // React.useEffect(() => {
    //     const subscription = watch((value, { name, type }) => console.log(value, name, type));
    //     return () => subscription.unsubscribe();
    //   }, [watch]);

  return (
    <>

      <div className="topContainer flex justify-center items-center overflow-auto h-screen ">



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
            <h1 className="text-3xl self-start mb-3 font-semibold">
              Create Account
            </h1>

            <form onSubmit={handleSubmit(submitForm)} className="w-full">
                <div className="mb-3">
              <input
                type="text"
                name=""
                
                placeholder="Full Name"
                className="form-control "
                {...register('fullName', {required : {
                    value:true,
                    message:'Field is required'
                }})}
              />
              {errors.fullName && <p className = "text-red-500 mx-1 mt-1">{errors.fullName?.message}</p>}

              </div>

              <div className="mb-3">
              <input
                type="number"
                name=""
                
                placeholder="Mobile Number"
                className="form-control "
                {...register('mobile', {required : {
                    value: true,
                    message: 'Field is required'
                },maxLength:{value : 10 , message : 'Cannot enter more than 10 digits'},
                minLength:{value:10 , message: 'Mobile number must be of 10 digits'}
              })}
              />
              {errors.mobile && <p className = "text-red-500 mx-1 mt-1">{errors.mobile?.message}</p>}
              {errors.mobile?.maxLength && <p>{errors.mobile.maxLength}</p>}
              {errors.mobile?.minLength && <p>{errors.mobile.minLength}</p>}
              </div>


              <input
                type="text"
                name=""
               
                placeholder="Enter Referral Code"
                className="form-control mb-3"
                {...register('referralCode')}
              />
              <div className="mb-1">
              <input
                type="password"
                name=""
                
                placeholder="Password"
                className="form-control "
                {...register('password', {required : {
                    value: true,
                    message: 'Field is required'
                }})}
              />
              {errors.password && <p className = "text-red-500 mx-1 mt-1">{errors.password?.message}</p>}
              </div>


              <p className="self-start mx-2 mb-4 text-sm font-thin">
                Password must be atleast 6 charcters
              </p>
              <button type="submit" className="bg-red-500 rounded-3xl transition ease-in-out delay-100  hover:bg-black  text-white w-full h-10">
                Sign Up{" "}
              </button>
            </form>
            <div className="termsAndCondition self-start mt-5 mx-2 font-medium">
            
              <p className="text-sm mb-3 ">
              
                Already have an account?{" "}
                <Link to={'/sign-in'}>
                <span className="text-red-500 ">Sign in </span>
                </Link>
              </p>
              
              <p className="text-sm mb-3">
                Buying for work? Create a free business account
              </p>
              <p className="text-sm">
                By creating an account or logging in, you agree
              </p>
              <p className="text-sm">
                to Anuda Mart <a className="text-red-500 cursor-pointer">Conditions of Use</a>{" "}
                and <a className="text-red-500 cursor-pointer">Privacy</a>
              </p>
              <p className="text-sm">
                <a className="text-red-500 cursor-pointer">Policy.</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
