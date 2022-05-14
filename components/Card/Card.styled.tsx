import styled from "styled-components";
import { a } from "react-spring";

interface CardProps {
  face: "front" | "back";
  style: any;
}

const CardWrapper = styled.div``;

const CardStyle = styled(a.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props: CardProps) =>
    props.face === "front" ? "var(--color-gray-light)" : "black"};
  font-size: 3rem;
  width: 100px;
  height: 100px;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  will-change: transform, opacity;
  &:hover {
    background-color: var(--color-teal-default);
  }
`;

export { CardStyle, CardWrapper };
