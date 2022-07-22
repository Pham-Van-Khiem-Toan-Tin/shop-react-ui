import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delItem } from "../redux/actions/index";
const Cart = () => {
  const state = useSelector((state) => state.addOrDelItems);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(delItem(item));
  };
  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            className="btn-close float-end"
            onClick={() => handleClose(cartItem)}
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.img}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const emtyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };
  const button = () => {
      return (
          <div className="container">
              <div className="row">
                  <Link to="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Process to checkout</Link>
              </div>
          </div>
      );
  }
  return (
    <>
      {state.length === 0 && emtyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}

    </>
  );
};

export default Cart;
