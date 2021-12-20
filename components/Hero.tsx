import Link from "next/link";
import React from "react";
import styled, { css } from "styled-components";

const Container = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
`;

const Hi = styled.p`
  color: ${({ theme }) => theme.colors.green};
`;

const Name = styled.h1`
  color: ${({ theme }) => theme.colors.lightSlate};
`;

const SubName = styled.h2`
  color: ${({ theme }) => theme.colors.slate};
`;

const Summary = styled.p`
  color: ${({ theme }) => theme.colors.slate};
`;

const Hero = () => {
  return (
    <Container>
      <Hi>Hi, my name is</Hi>
      <Name>Diogo Cardoso.</Name>
      <SubName>I build things for the web.</SubName>
      <Summary>
        I&apos;m a software engineer, based in Portugal. I enjoy creating and
        developing dynamic web applications with the latest technlogies. I work
        at a startup{" "}
        <Link href="https://joinbeeyard.com?utm_source=https://diogocardoso.dev&utm_medium=intro">
          <a>@Beeyard</a>
        </Link>{" "}
        where I wear a lot of hats.{" "}
      </Summary>
    </Container>
  );
};

export default Hero;
