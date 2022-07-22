import React from "react";
import DATA from "../DATA";
import { Link } from "react-router-dom";
const Products = () => {
  const CardItem = (item) => {
    return (
      <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-6">
        <div
          className="card my-5 py-4"
          key={item.id}
          style={{ width: "100%"}}
        >
          <img src={item.img} className="card-img-top" alt={item.title} />
          <div className="card-body text-center">
            <h5 className="card-title">{item.title}</h5>
            <p className="lead">${item.price}</p>
            <Link
              to={`/product/${item.title}`}
              className="btn btn-outline-primary"
            >
              Buy now
            </Link>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Product</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row">{DATA.map(CardItem)}</div>
      </div>
    </>
  );
};

export default Products;
