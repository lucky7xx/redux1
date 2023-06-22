import styled from "styled-components";

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: antiquewhite;
  flex-direction: row;
  flex-wrap: wrap;
`;

const InnerDiv = styled.div`
  background-color: aqua;
  padding: 20px;
  overflow: hidden;
  margin: 10px 10px;
  width: 200px;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export { OuterDiv, InnerDiv };
