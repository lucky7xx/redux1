import React from "react";
import { OuterDiv, InnerDiv } from "./CenteredDivStyle";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";

const CenteredDiv = () => {
  const value1 = useSelector((state) => state.eNumbers.value);
  const value2 = useSelector((state) => state.numbers.value);
  return (
    <>
      <OuterDiv>
        <InnerDiv>
          <h1>Docker</h1>
        </InnerDiv>
        <InnerDiv>
          <h1>Jenkins</h1>
        </InnerDiv>
        <InnerDiv>
          <h1>Kubernetes</h1>
        </InnerDiv>
        <InnerDiv>
          <h1>Docker</h1>
        </InnerDiv>
        <InnerDiv>
          <h1>Jenkins</h1>
        </InnerDiv>
        <InnerDiv>
          <h1>Kubernetes</h1>
        </InnerDiv>
        <InnerDiv>
          <h1>Docker</h1>
        </InnerDiv>
        <InnerDiv>
          <h1>Jenkins</h1>
        </InnerDiv>
        <InnerDiv>
          <h1>Kubernetes</h1>
        </InnerDiv>
      </OuterDiv>
      <h1 className="justify-content-center d-flex">{value2}</h1>
      <h1 className="justify-content-center d-flex">{value1}</h1>
      <p className="justify-content-center d-flex">
        Go back again to
        <span>
          <Link to="/counter"> Counter </Link>
        </span>
        page for updating value and come back here again if you dont believe me!
      </p>
    </>
  );
};

export default CenteredDiv;
