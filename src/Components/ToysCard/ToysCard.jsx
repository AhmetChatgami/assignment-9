import React from "react";
import { Link } from "react-router";

//  "toyId": 2,
//     "toyName": "Sky-High RC Quadcopter",
//     "sellerName": "Aero Gadgets",
//     "sellerEmail": "support@aerogadgets.com",
//     "price": 89.99,
//     "rating": 4.8,
//     "availableQuantity": 30,
//     "description": ,
//     "pictureURL": "https://i.ibb.co.com/dwH6MdRT/1-STEMUPDATED3.png",
//     "subCategory": "Remote Control"
const ToysCard = ({ toy }) => {
  const { toyName, sellerName, price, rating, availableQuantity, pictureURL, toyId } =
    toy;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="h-48 overflow-hidden">
          <img src={pictureURL} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <p className="font-semibold">Seller: {sellerName}</p>
          <p>Price: ${price}</p>
          <p> Rating: {rating}</p>
          <p> Available: {availableQuantity}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${toyId}`} className="btn btn-primary">See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
