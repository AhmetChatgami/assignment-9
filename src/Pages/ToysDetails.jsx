import React from "react";
import useToys from "../Hooks/useToys";
import { useParams } from "react-router";

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
    subCategory, description, sellerEmail
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
            <p>{sellerName}</p>
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
     </div>
    </div>
  );
};

export default ToysDetails;
