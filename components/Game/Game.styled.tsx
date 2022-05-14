import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 1rem;
  margin: 0 auto;
  max-width: 600px;
  padding: 1rem;
  height: 100%;
`;

export { Wrapper };
