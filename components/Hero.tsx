import React from "react";
import styled from "styled-components";

const Container = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
`;

const Hero = () => {
  return (
    <Container>
      <p>Hi, my name is</p>
      <h1>Diogo Cardoso.</h1>
      <h2>I build things for the web.</h2>
      <p>I&apos;m a software engineer, bla bla</p>
    </Container>
  );
};

export default Hero;
