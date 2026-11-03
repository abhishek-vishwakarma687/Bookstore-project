import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import list from "../list.json";
const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="pt-28 text-center space-y-8">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            iusto alias aliquam illum similique hic deserunt quos nesciunt
            neque, sapiente perferendis soluta vitae voluptatum, amet eligendi
            esse reiciendis eaque aspernatur, sunt dolorum minima magni. Dolores
            possimus veniam vitae amet quisquam tempore, optio quaerat. Pariatur
            dolores error, laudantium labore modi quidem quam
          </p>
          <Link
            to="/"
            className="bg-pink-500 px-3 py-2 rounded-md text-white cursor-pointer hover:bg-pink-700"
          >
            Back
          </Link>
        </div>
        <div className="grid grid-cols-1 mt-11 md:grid-cols-3 gap-10">
            {list.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))}
        </div>
      </div>
    </>
  );
};

export default Course;
