import type { NextPage } from "next";
import Head from "next/head";
import Game from "../components/Game/Game";
import styled from "styled-components";
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  postion: relative;
`;

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Game />
      </Main>
    </>
  );
};

export default Home;
