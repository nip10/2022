import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { SectionHeading } from "./UI/Section";

const Container = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  /* max-width: ${({ theme }) => theme.sizes.maxWidth}; */
  max-width: 900px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
`;

const PhotoWrapper = styled.div`
  /* .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    } */
  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
  }
  &:before {
    top: 0;
    left: 0;
    background-color: var(--navy);
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid var(--green);
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

const About = () => (
  <Container>
    <SectionHeading>About me</SectionHeading>
    <Grid>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        cupiditate itaque repellendus quidem, ullam incidunt aliquid iusto modi
        culpa animi consectetur dolorum earum assumenda, nesciunt quos nostrum
        expedita eos. Sequi!
      </p>
      <PhotoWrapper>
        <Image alt="photo of me" src="" />
      </PhotoWrapper>
    </Grid>
  </Container>
);

export default About;
