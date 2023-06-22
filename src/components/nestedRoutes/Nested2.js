import React from "react";
import { Link } from "react-router-dom";

const Nested2 = () => {
  return (
    <div>
      <h1>Nested-2</h1>
      <Link to="/nestedRoutes/nested2/subnested">Subnested</Link>
    </div>
  );
};

export default Nested2;
