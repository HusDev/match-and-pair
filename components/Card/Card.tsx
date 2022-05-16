import { CardStyle, CardWrapper } from "./Card.styled";
import { useSpring } from "react-spring";
import Image from "next/image";
import { GameCard } from "../../gameMachine";

const Card = ({
  emoji,
  selectCard,
  flip,
}: {
  emoji: GameCard;
  selectCard: any;
  flip: boolean;
}) => {
  const { transform, opacity } = useSpring({
    opacity: flip ? 1 : 0,
    transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <CardWrapper
      onClick={() => {
        // TODO: Move this to xstate?
        if (!emoji.collected) {
          selectCard(emoji);
        }
      }}
    >
      <CardStyle
        face={"front"}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      >
        <Image
          src="/react-logo.png"
          layout="fill"
          objectFit="contain"
          alt={"react logo"}
        />
      </CardStyle>
      <CardStyle
        face={"back"}
        style={{
          opacity,
          transform,
          rotateY: "180deg",
        }}
      >
        {emoji.type}
      </CardStyle>
    </CardWrapper>
  );
};

export { Card };
