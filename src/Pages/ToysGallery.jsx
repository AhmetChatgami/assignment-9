import React from "react";
import useToys from "../Hooks/useToys";
import { Link } from "react-router";
import ToysCard from "../Components/ToysCard/ToysCard";

const ToysGallery = () => {
  const { toys } = useToys();
  return (
    <div>
        <div className="text-center my-10 ">
          <h2 className="text-2xl font-medium">Smart Toys for Curious Minds • Play, Build & Learn • Toys That Inspire Creativity</h2>
        </div>
      <h2 className="text-xl font-semibold">Toys Category: ({toys.length})</h2>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {toys.map((toy) => (
            <ToysCard key={toy.id} toy={toy} />
          ))}
        </div>
        <div className="py-8">
          <Link className="btn btn-outline" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToysGallery;
