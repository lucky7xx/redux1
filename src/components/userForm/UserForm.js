import React, { useState } from "react";
import { updateForm } from "../../store/slices/UserFormSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const UserForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(updateForm(formData));
    history.push("/nestedRoutes/nested2/subnested");
    setFormData({
      email: "",
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
  };

  return (
    <div className="container-fluid ml-5 d-flex justify-content-center">
      <form>
        <div className="form-row">
          <div className="form-group col-md-5">
            <label htmlFor="inputEmail4">First Name</label>
            <input
              type="First Name"
              className="form-control"
              placeholder="Trump"
              onChange={(e) => {
                setFormData({ ...formData, firstName: e.target.value });
              }}
            />
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="inputEmail4">Last Name</label>
            <input
              type="Last Name"
              className="form-control"
              placeholder="Donald"
              onChange={(e) => {
                setFormData({ ...formData, lastName: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-10">
            <label htmlFor="inputEmail4">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-10">
            <label htmlFor="inputAddress">Address</label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              onChange={(e) => {
                setFormData({ ...formData, address: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-10">
            <label htmlFor="inputCity">City</label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              onChange={(e) => {
                setFormData({ ...formData, city: e.target.value });
              }}
            />
          </div>
          <div className="form-group col-md-8">
            <label htmlFor="inputState">State</label>
            <select
              id="inputState"
              className="form-control"
              onChange={(e) => {
                setFormData({ ...formData, state: e.target.value });
              }}
            >
              <option defaultValue={"Choose"}>Choose...</option>
              <option>Gujarat</option>
              <option>Haryana</option>
              <option>Los Angeles</option>
              <option>UP</option>
            </select>
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip">Zip</label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              onChange={(e) => {
                setFormData({ ...formData, zip: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default UserForm;
