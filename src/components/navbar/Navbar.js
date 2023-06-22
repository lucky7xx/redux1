import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Badge from "@mui/material/Badge";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart.items);

  // Calculate total quantity
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" to="/">
          AmmaZan.in .
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/counter" className="nav-link">
                Counter
              </Link>
            </li>
            <li className="nav-item">
              <Link to="centeredDiv" className="nav-link ">
                Centered Div
              </Link>
            </li>
            <li className="nav-item">
              <Link to="cart" className="nav-link ">
                Shopping Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="nestedRoutes" className="nav-link ">
                Nested Routes
              </Link>
            </li>
          </ul>
        </div>

        <h6>
          <span className="badge badge-secondary">
            <Link to="/cart">
              <Badge badgeContent={totalQuantity} color="success">
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </span>
        </h6>
      </nav>
    </div>
  );
};

export default Navbar;
