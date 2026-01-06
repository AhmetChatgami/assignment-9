import React from "react";

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
  const { toyName, sellerName, price, rating, availableQuantity, pictureURL } =
    toy;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="h-48 overflow-hidden">
          <img
            src={pictureURL}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{toyName}</h2>
          <p>
          {sellerName}
          </p>
          <p>
          {price}
          </p>
          <p>
          {rating}
          </p>
          <p>
          {availableQuantity}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">See Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
