import React from "react";
import { Link } from "react-router-dom";

const NestedRoutes = () => {
  return (
    <div>
      <h1>Nested Routes</h1>
      <Link to="/nestedRoutes/nested1">Nested-1</Link>
      <Link to="/nestedRoutes/nested2">Nested-2</Link>
    </div>
  );
};

export default NestedRoutes;
