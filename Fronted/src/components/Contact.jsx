import React from "react";

const Contact = () => {
  return (<>
    <div className="flex flex-col  justify-center items-center min-h-screen">
      <h3 className="font-bold text-lg text-center">Contact us</h3>
      <div className="flex flex-col gap-3 mt-6 w-1/2">
        <span>Email:</span>
        <input
          className=" dark:bg-slate-600 dark:text-white px-2 bg-gray-100 py-2 rounded-md"
          type="email"
          placeholder="Enter Email"
        />
      </div>
      <div className="flex flex-col gap-3 mt-8  w-1/2">
        <span>Password:</span>
        <input
          className=" dark:bg-slate-600 dark:text-white px-2 bg-gray-100 py-2 rounded-md"
          type="password"
          placeholder="Enter Password"
        />
      </div>
      <div className="flex flex-col gap-3 mt-8 w-1/2 ">
        <span>Message:</span>
        <input
          className=" dark:bg-slate-600 dark:text-white px-2 h-28 bg-gray-100 py-2 rounded-md"
          type="message"
          placeholder="Type your message"
        />
      </div>
      <button className="bg-blue-500 p-2 mt-8 cursor-pointer hover:bg-blue-800 rounded-md text-white">Submit</button>
    </div>

      </>
  );
};

export default Contact;
