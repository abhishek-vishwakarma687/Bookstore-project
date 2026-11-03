import React from "react";

const Cards = ({item}) => {
    
  return (
    <>
      <div>
        <div className="card bg-base-100 w-96 dark:bg-slate-900 dark:text-white shadow-sm hover:scale-105 duration-200">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>
              {item.title}
            </p>
            <div className="card-actions justify-between mt-4">
              <div className="badge badge-outline cursor-pointer">${item.price}</div>
              <div className="badge badge-outline hover:bg-pink-500 hover:text-white cursor-pointer">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
