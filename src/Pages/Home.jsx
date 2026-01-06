import React from "react";

import { Link, useLoaderData } from "react-router";
import ToysCard from "../Components/ToysCard/ToysCard";
import useToys from "../Hooks/useToys";

const Home = () => {
  const { toys, loading, error } = useToys();
  // const toys = useLoaderData();
  const featuredToys= toys.slice(0, 6)
  console.log()
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredToys.map((toy) => (
          <ToysCard key={toy.toyId} toy={toy}/>
        ))}

      </div>
      <div className="py-8">

        <Link className="btn btn-outline" to="/toysgallery">See More</Link>
      </div>
    </div>
  );
};

export default Home;
