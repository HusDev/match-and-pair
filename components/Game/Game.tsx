import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import { Wrapper } from "./Game.styled";
import { createMemoryGameMachine, GameCard } from "./../../gameMachine";
import { useMachine } from "@xstate/react";

const emojis = [
  { type: "🧝‍♀️", collected: true },
  { type: "😂", collected: true },
  { type: "🏄🏽", collected: true },
  { type: "😭", collected: true },
  { type: "👠", collected: true },
  { type: "😎", collected: true },
  { type: "😈", collected: true },
  { type: "🐸", collected: true },
];

const shuffleCards: GameCard[] = [...emojis, ...emojis].sort(
  () => Math.random() - 0.5
);

const gameMachine = createMemoryGameMachine({
  cards: shuffleCards,
  pairs: [],
  firstSelected: undefined,
  secondSelected: undefined,
});

const Game = () => {
  const [state, send] = useMachine(gameMachine);
  const { firstSelected, secondSelected } = state.context;

  const selectCard = (card: GameCard) => {
    const index = state.context.cards.indexOf(card);
    send({ type: "SELECT", index });
  };

  return (
    <>
      <Wrapper>
        {state.context.cards.map((emoji, index) => {
          // const visible =
          //   emoji.collected ||
          //   emoji === firstSelected ||
          //   emoji === secondSelected;
          return (
            <Card
              key={index}
              emoji={emoji}
              flip={emoji.collected}
              selectCard={selectCard}
            />
          );
        })}
      </Wrapper>
    </>
  );
};

export default Game;
