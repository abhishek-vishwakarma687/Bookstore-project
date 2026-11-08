import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as Slick from "react-slick";
import Cards from "./Cards";


const Slider = Slick.default?.default ?? Slick.default;
const Freebook = () => {
  const [freebooks, setFreebooks] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios("http://localhost:3000/book");
        console.log(res.data);
        setFreebooks(res.data.filter((data) => data.category === "Free"));
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            iure consequuntur deserunt maxime. Inventore expedita adipisci
            numquam tempora. Officiis error aut veniam
          </p>
        </div>
        <div className="mt-10 mb-10">
          <Slider {...settings}>
            {freebooks.map((item)=>(
              <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
