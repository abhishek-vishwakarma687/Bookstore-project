import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal pr-5 ">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button
            type="button"
              onClick={() => document.getElementById("my_modal_3").close()}
              className=" dark:text-white dark:hover:bg-gray-800 btn-sm cursor-pointer btn-circle hover:bg-gray-200 btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <h3 className="font-bold text-lg text-center">Login</h3>
            <div className="flex flex-col gap-3 mt-6">
              <span>Email:</span>
              <input
                className=" dark:bg-slate-600 dark:text-white px-2 bg-gray-100 py-2 rounded-md"
                type="email"
                placeholder="Enter Email"
                {...register("email", { required:true})}
                />
              {errors.email && (
                <p className="text-red-500">Please Enter Email</p>
              )}
            </div>
            <div className="flex flex-col gap-3 mt-8">
              <span>Password:</span>
              <input
                className=" dark:bg-slate-600 dark:text-white px-2 bg-gray-100 py-2 rounded-md"
                type="password"
                placeholder="Enter Password"
                {...register("password", { required: true})}
              />
              {errors.password && (
                <p className="text-red-500">Please Enter Password</p>
              )}
            </div>
            <div className="flex justify-around items-center mt-8">
              <button className="bg-pink-500 px-2 py-1 rounded-md cursor-pointer text-white">
                Login
              </button>
              <span>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline cursor-pointer"
                >
                  Signup
                </Link>
              </span>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
