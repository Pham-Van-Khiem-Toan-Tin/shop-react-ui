import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const CartBtn = () => {
  const state = useSelector((state) => state.addOrDelItems)
  
  return (
    <>
      <Link className="nav-link" to="/cart">
        <FaShoppingCart className="me-1" /> Cart ({state.length})
      </Link>
    </>
  );
};

export default CartBtn;
