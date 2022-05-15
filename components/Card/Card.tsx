import { useState } from "react";
import { CardStyle, CardWrapper } from "./Card.styled";
import { useSpring } from "react-spring";
import Image from "next/image";
const Card = ({ emoji }: { emoji: string }) => {
  const [flip, setFlip] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flip ? 1 : 0,
    transform: `perspective(600px) rotateY(${flip ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <CardWrapper onClick={() => setFlip((state) => !state)}>
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
        {emoji}
      </CardStyle>
    </CardWrapper>
  );
};

export { Card };
