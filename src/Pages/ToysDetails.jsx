import React from "react";
import useToys from "../Hooks/useToys";
import { Link, useParams } from "react-router";

const ToysDetails = () => {
  const { toys, loading } = useToys();
  console.log(toys);
  const { id } = useParams();
  console.log(id);
  if (loading) {
    return <p>loading...</p>;
  }

  const toy = toys.filter((p) => Number(p.toyId) == id);
  console.log(toy);

  const {
    toyName,
    sellerName,
    price,
    rating,
    availableQuantity,
    pictureURL,
    toyId,
    subCategory,
    description,
    sellerEmail,
  } = toy[0];
  console.log(toy);
  return (
    <div>
      <div>
        <h2>Toys Details Page</h2>
        <div className="card card-side bg-base-100 shadow-sm">
          <figure>
            <img className="w-70" src={pictureURL} alt="toys" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{toyName}</h2>
            <p>
              Selling by:{" "}
              <span className="bg-red-400 font-medium p-1 rounded-xl">
                {sellerName}
              </span>
            </p>
            <p>Toy Category: {subCategory}</p>
            <p>Price: ${price}</p>
            <p>
              Rating:{" "}
              <span className="bg-amber-400 p-1 rounded-full">{rating}</span>
            </p>
            <p className="font-semibold">Contact: {sellerEmail}</p>

            <div className="card-actions justify-end">
              <button className="btn btn-primary">{sellerName}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h2 className=" text-2xl font-semibold">Description:</h2>
        <p className="text-gray-500 pt-4">{description}</p>

        {/* Try now form */}
        <div className="hero min-h-screen">
          <div className="hero-content flex-col">
            <div className="text-center">
              <h1 className="text-5xl font-bold">Keep us touch!</h1>
              <p className="py-6">
               If you Love to checkout, please feel free to fill up this contact field
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input type="text" className="input" placeholder="Your Full Name" />
                  <label className="label">Email</label>
                  <input type="email" className="input" placeholder="Validate Email" />
                  
                 
                  <button className="btn bg-gradient-to-r from-amber-400 to-amber-600 mt-4">Try Now</button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
        
      </div>

      {/* link back to gallery  */}
      <Link className="btn btn-outline" to="/toysgallery">
        Back to Gallery
      </Link>
    </div>
  );
};

export default ToysDetails;
