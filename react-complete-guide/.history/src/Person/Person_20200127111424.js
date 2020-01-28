import React from "react";
// import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = props => {
  return (
    <StyledDiv>
      <p onClick={props.clicked}>
        i am {props.name} and i am {props.age} years old{" "}
      </p>
      <p> {props.children} </p>

      <input onChange={props.changed} value={props.name} type="text" />
    </StyledDiv>
  );
};

export default person;
