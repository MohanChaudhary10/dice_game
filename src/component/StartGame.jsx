import React from "react";
import styled from "styled-components";

const StartGame = ({ toogle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toogle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  display: flex;
  gap: 30px;
  align-items: center;
  height: 100vh;

  .content h1 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000;
  min-width: 220px;
  border: 2px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: white;
    border: 2px solid black;
    color: black;
  }
`;
