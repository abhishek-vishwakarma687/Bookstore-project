import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const Signup = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    // console.log(userInfo);

    try {
      const res = await axios.post(
        "http://localhost:3000/user/signup",
        userInfo,
      );

      // console.log(res.data);
toast.success('Signup successful');
navigate(from, { replace: true });
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      reset()
    } catch (err) {
      console.log(err.response?.data);
      toast.error(err.response.data.message);
    }
  };
  return (
    <>
      <div>
        <div id="my_modal_3" className="">
          <div className=" dark:bg-slate-900 dark:text-white">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col p-6 justify-center min-h-screen bg-gray-400  items-center"
              method="dialog"
            >
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className=" dark:text-white btn-sm cursor-pointer btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg text-center">Signup</h3>
              <div className="flex flex-col md:w-1/2 gap-3 mt-8 w-full">
                <span>Fullname:</span>
                <input
                  className=" dark:bg-slate-600 dark:text-white px-2 bg-white  py-2 rounded-md"
                  type="text"
                  placeholder="Enter Fullname"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <p className="text-red-500">Please Enter fullname</p>
                )}
              </div>
              <div className="flex flex-col w-full gap-3 mt-8 md:w-1/2">
                <span>Email:</span>
                <input
                  className=" dark:bg-slate-600 dark:text-white px-2 bg-white  py-2 rounded-md"
                  type="email"
                  placeholder="Enter Email"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Please Enter Email</p>
                )}
              </div>
              <div className="flex flex-col w-full gap-3 mt-8 md:w-1/2">
                <span>Password:</span>
                <input
                  className=" dark:bg-slate-600 dark:text-white px-2 bg-white  py-2 rounded-md"
                  type="password"
                  placeholder="Enter Password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500">Please Enter password</p>
                )}
              </div>
              <div className="flex justify-around w-full items-center mt-8 md:w-1/2">
                <button className="bg-pink-500 px-2 py-1 rounded-md cursor-pointer text-white">
                  Signup
                </button>
                <span>
                  Have Account?{" "}
                  <Link
                    className="text-blue-500 underline cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </Link>
                  <Login />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
