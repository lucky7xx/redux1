import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  updateItemInCart,
} from "../../store/slices/CartSlice";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const history = useHistory();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleIncrement = (itemId) => {
    const selectedItem = products.find((item) => item.id === itemId);

    if (selectedItem) {
      const existingItem = cartItems.find((item) => item.id === itemId);

      if (existingItem) {
        dispatch(
          updateItemInCart({
            ...existingItem,
            quantity: existingItem.quantity + 1,
          })
        );
      } else {
        const newItem = {
          id: selectedItem.id,
          name: selectedItem.title,
          quantity: 1,
          price: selectedItem.price,
          img: selectedItem.image,
        };

        dispatch(addItemToCart(newItem));
      }
    }
  };

  const handleDecrement = (itemId) => {
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

  const handleCheckout = () => {
    history.push("/cart");
  };

  return (
    <>
      <div>
        <h3>AmmaZan.in</h3>
        <div className="row container-fluid">
          {products.map((item, index) => {
            const cartItem = cartItems.find(
              (cartItem) => cartItem.id === item.id
            );
            const cartQuantity = cartItem ? cartItem.quantity : 0;

            return (
              <div className="col-md-3" key={item.id}>
                <div className="card mt-3">
                  <div className="card-image d-flex justify-content-center">
                    <img
                      src={item.image}
                      className="img-thumbnail"
                      alt="..."
                      style={{ width: "10rem", height: "10rem" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      Price: {item.price} rs <br />
                      Quantity: {cartQuantity}
                    </p>
                    <div className="button-group">
                      <button
                        className="btn btn-primary"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>{" "}
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="justify-content-center d-flex mt-5">
          <button className="btn btn-success" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
