import React from "react";
import { InnerDiv } from "../centeredDivs/CenteredDivStyle";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  eIncrement,
  eDecrement,
} from "../../store/slices/NumberSlice"; // Import the actions
import { Link } from "react-router-dom/cjs/react-router-dom";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.numbers.value);
  const eValue = useSelector((state) => state.eNumbers.value); // Access the value from the Redux store

  const handleIncrement = () => {
    dispatch(increment()); // Dispatch the increment action
  };

  const handleDecrement = () => {
    dispatch(decrement()); // Dispatch the decrement action
  };

  const handleEIncrement = () => {
    dispatch(eIncrement()); // Dispatch the increment action
  };

  const handleEDecrement = () => {
    dispatch(eDecrement()); // Dispatch the decrement action
  };

  return (
    <div>
      <InnerDiv className="justify-content-center d-flex">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +
        </button>
        <h2>{value}</h2> {/* Display the value from the Redux store */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleDecrement}
        >
          -
        </button>
      </InnerDiv>
      <br />
      <InnerDiv>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleEIncrement}
        >
          +
        </button>
        <h2>{eValue}</h2> {/* Display the value from the Redux store */}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleEDecrement}
        >
          -
        </button>
      </InnerDiv>
      <p className="justify-content-center d-flex">
        go to{" "}
        <span>
          <Link to="/centeredDiv">this page</Link>
        </span>{" "}
        for checking this updated values, which is whole different component
      </p>
    </div>
  );
};

export default Counter;
