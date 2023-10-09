import React from "react";
import Heading from "../components/Heading";
import Switch from "../components/Switch";
import Footer from "../templates/Footer";
import image from "../assets/moviecover.png";
import { FaStar } from "react-icons/fa";

const BookmarkApp = () => {
  return (
    <>
      <header className="padding bg-white dark:bg-black">
        <Heading
          className="dark:text-lightblue"
          title="BookMarks"
          size="16"
          as="h1"
        />
        <Switch />
      </header>
      <main className="flex wrap justify-around">
        <section className=" relative flex flex-col dark:bg-black pb-6">
          <figure>
            <img src={image} className="w-314px" />
          </figure>
          <h3 className="dark:text-white text-sm ">Movie title</h3>
          <div className="flex">
            <FaStar className="text-amber-400" />
            <p className="text-gray ml-4">10.5/10IMDb</p>
          </div>
        </section>
        <section className=" relative flex flex-col dark:bg-black pb-6">
          <figure>
            <img src={image} className="w-314px" />
          </figure>
          <h3 className="dark:text-white text-sm ">Movie title</h3>
          <div className="flex">
            <FaStar className="text-amber-400" />
            <p className="text-gray ml-4">10.5/10IMDb</p>
          </div>
        </section>
        <section className=" relative flex flex-col dark:bg-black">
          <figure>
            <img src={image} className="w-314px" />
          </figure>
          <h3 className="dark:text-white text-sm ">Movie title</h3>
          <div className="flex">
            <FaStar className="text-amber-400" />
            <p className="text-gray ml-4">10.5/10IMDb</p>
          </div>
        </section>
        <section className=" relative flex flex-col dark:bg-black">
          <figure>
            <img src={image} className="w-314px" />
          </figure>
          <h3 className="dark:text-white text-sm ">Movie title</h3>
          <div className="flex">
            <FaStar className="text-amber-400" />
            <p className="text-gray ml-4">10.5/10IMDb</p>
          </div>
        </section>
        <section className=" relative flex flex-col dark:bg-black">
          <figure>
            <img src={image} className="w-314px" />
          </figure>
          <h3 className="dark:text-white text-sm ">Movie title</h3>
          <div className="flex">
            <FaStar className="text-amber-400" />
            <p className="text-gray ml-4">10.5/10IMDb</p>
          </div>
        </section>
        <section className=" relative flex flex-col dark:bg-black">
          <figure>
            <img src={image} className="w-314px" />
          </figure>
          <h3 className="dark:text-white text-sm ">Movie title</h3>
          <div className="flex">
            <FaStar className="text-amber-400" />
            <p className="text-gray ml-4">10.5/10IMDb</p>
          </div>
        </section>
        <section className=" relative flex flex-col dark:bg-black">
          <figure>
            <img src={image} className="w-314px" />
          </figure>
          <h3 className="dark:text-white text-sm ">Movie title</h3>
          <div className="flex">
            <FaStar className="text-amber-400" />
            <p className="text-gray ml-4">10.5/10IMDb</p>
          </div>
        </section>
        <section className=" relative flex flex-col dark:bg-black">
          <figure>
            <img src={image} className="w-314px" />
          </figure>
          <h3 className="dark:text-white text-sm ">Movie title</h3>
          <div className="flex">
            <FaStar className="text-amber-400" />
            <p className="text-gray ml-4">10.5/10IMDb</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BookmarkApp;
