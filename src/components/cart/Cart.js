import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  removeItemFromCart,
  updateItemInCart,
} from "../../store/slices/CartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const history = useHistory();
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  console.log("cartItems", items);

  // Calculate total sum of prices
  // Calculate total sum of prices
  const totalSum = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const handleRemove = (itemId) => {
    const existingItem = cartItems.find((item) => item.id === itemId);

    if (existingItem) {
      if (existingItem.quantity === 1) {
        dispatch(removeItemFromCart(itemId));
      } else {
        dispatch(
          updateItemInCart({
            ...existingItem,
            quantity: existingItem.quantity - 1,
          })
        );
      }
    }
  };
  // Calculate total quantity
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (totalQuantity === 0) {
      alert("Please add items to cart");
      return;
    }
    history.push("/userForm");
  };

  return (
    <div>
      <h2>Cart</h2>
      {items.map((item, index) => (
        <div className="row border border-1 ml-5 mr-5 ">
          <div className="col-3 border border-1 p-5" key={index}>
            <p>Item Name: {item.name} </p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}</p>
            <button
              className="btn btn-danger"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
          </div>
          <div className="col-3 p-2">
            <div className="img-fluid" alt="..">
              <img
                src={item.img}
                className="card-image img-thumbnail"
                style={{ width: "13rem", height: "15rem" }}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="container border border-1 w-50 p-5 mt-5">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Sum of Prices: {totalSum}</p>

        <button className="btn btn-success" onClick={handleCheckout}>
          Go To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
