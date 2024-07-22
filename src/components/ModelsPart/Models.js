import React from "react";
import '../../style.css'

function Models({cars}) {
  return (
    <>
    <div className="model">
      {cars.new ? (
        <p className="new">{cars.new}</p>
      ) : (
        <p className="notNew">Not New</p>
      )}
      <img src={cars.pic} alt="" className="CarImg" />
      <img src={cars.ipic} alt="" className="i" width="35px" />
      <img src={cars.Mpic} alt="" className="m" width="35px" />
      <p className="carName">{cars.name}</p>
      <p className="typeCar">{cars.type}</p>
      {/* <p className="carPrice">from {cars.price}</p> */}
      {cars.price ? (
        <p className="carPrice">{cars.price}</p>
      ) : (
        <p className="notNew">Not New</p>
      )}
    </div>

    </>
  );
}

export default Models;
