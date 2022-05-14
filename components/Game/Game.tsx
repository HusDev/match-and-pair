import { Card } from "../Card/Card";
import { Wrapper } from "./Game.styled";

const Game = () => {
  return (
    <>
      <Wrapper>
        <Card emoji={"😀"}></Card>
        <Card emoji={"😀"}></Card>
        <Card emoji={"😀"}></Card>
        <Card emoji={"😀"}></Card>
      </Wrapper>
    </>
  );
};

export default Game;
