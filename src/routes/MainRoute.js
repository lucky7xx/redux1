import React from "react";
import CenteredDiv from "../components/centeredDivs/CenteredDiv";
import Navbar from "../components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Counter from "./../components/counter/Counter";
import Home from "../components/home/Home";
import Cart from "../components/cart/Cart";
import UserForm from "../components/userForm/UserForm";
import NestedRoutes from "../components/nestedRoutes/NestedRoutes";
import Nested1 from "../components/nestedRoutes/Nested1";
import Nested2 from "../components/nestedRoutes/Nested2";
import Subnested from "../components/nestedRoutes/Subnested"; // Import the Subnested component

const MainRoute = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/centeredDiv">
          <CenteredDiv />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/userForm">
          <UserForm />
        </Route>
        <Route path="/nestedRoutes">
          <NestedRoutes />
        </Route>
      </Switch>
      <Switch>
        <Route path="/nestedRoutes/nested1">
          <Nested1 />
        </Route>
        <Route path="/nestedRoutes/nested2">
          <Nested2 />
        </Route>
      </Switch>
      <Switch>
        <Route path="/nestedRoutes/nested2/subnested">
          {" "}
          {/* Add the new route for /nestedRoutes/nested2/subnested */}
          <Subnested />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRoute;
