import React from "react";

import { Link, useLoaderData } from "react-router";
import ToysCard from "../Components/ToysCard/ToysCard";
import useToys from "../Hooks/useToys";

import ToySlider from "../Components/ToySlider";
import { SwiperSlide } from "swiper/react";

const Home = () => {
  const { toys = [], loading, error } = useToys();
  // const toys = useLoaderData();
  console.log("toys:", toys);
  const topToys = toys.slice(3, 8);
  console.log("top toys:", topToys);
  const featuredToys = toys.slice(0, 6);
  console.log();
  if (loading) return <p>Loading toys...</p>;
  return (
    <div>
      {/* Hero Sect */}
      <div className="text-center my-10 pb-5 border-b-2 border-amber-200">
        <h1 className="text-3xl font-semibold">
          Where{" "}
          <span className="text-amber-600 font-medium ">
            Play, Learning <span className="text-black"> &</span> Imagination
          </span>{" "}
          Come Together
        </h1>

        <p className="pt-4 text-gray-500 text-xl">
          Discover a world of carefully selected toys — <br />
          from creative building blocks to exciting STEM adventures — all in one
          happy place.
        </p>
        <p className="text-xl mt-4 ">Discover • Play • Imagine</p>
      </div>

      {/* Slider */}
      
       <ToySlider toys={topToys} />


      <div className="text-2xl text-center">
        <h2 className="font-medium py-8"> Our Popular Toys</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredToys.map((toy) => (
          <ToysCard key={toy.toyId} toy={toy} />
        ))}
      </div>
      <div className="py-8">
        <Link className="btn btn-outline" to="/toysgallery">
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default Home;
