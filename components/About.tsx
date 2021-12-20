import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { SectionHeading } from "./UI/Section";
import Link from "next/link";

const Container = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
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
      <div>
        <p>
          Hello! My name is Diogo and I am a Software Enginner based in{" "}
          <Link href="https://pt.wikipedia.org/wiki/Porto">
            <a>Porto, Portugal</a>
          </Link>
          . I enjoy creating and developing dynamic web applications with the
          latest technologies. Organized, team-oriented and highly adaptable,
          enjoy fast-paced environments. Background in{" "}
          <Link href="https://sigarra.up.pt/feup/en/CUR_GERAL.CUR_VIEW?pv_ano_lectivo=2021&pv_origem=CUR&pv_tipo_cur_sigla=M&pv_curso_id=22806">
            <a>Electrical and Computer Engineering at FEUP</a>
          </Link>
          .
        </p>
        <p>Here are a few technologies I&apos;ve been working with recently:</p>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
          <li>AWS</li>
        </ul>
        <span>EXPAND</span>
        <p>
          My interest in programming began in high school, a time where I was
          using Adobe Dreamweaver to code in HTML and PHP, using a MySQL
          database, and deploying code using FTP. I was fascinated - it looked
          like magic. Shortly after, I developed an interest in electronics and
          automation. Decided to pursue both subjects and enrolled in an
          Electrical and Computer engineering degree (and Masters afterwards).
          Worked on my master thesis at a start-up in Porto, Portugal -{" "}
          <Link href="https://www.wegho.com/">
            <a>Wegho</a>
          </Link>{" "}
          - where I developed a framework to process and analyze georeferencing
          data.
        </p>
        <p>
          My professional career started at Wegho, shortly after my master
          thesis (now as a Software Engineer), where I&apos;ve worked in
          different projects and took multiple roles - fron the core web
          application and API, to an offline-first PWA, and cloud
          infrastructure. During this time, Wegho became a scale-up, and is now
          in the top 25 scale-ups in Portugal.
          <br />
          I&apos;m currently working at{" "}
          <Link href="https://joinbeeyard.com">
            <a>Beeyard</a>
          </Link>
          , a start-up incubated in Aveiro, Portugal, where I&apos;m building a
          new product from the ground-up. I wear a lot of hats here, and lead
          the development of the core API, databases, cloud infrastructure, and
          other projects, such as a desktop app.
          <br />
          Meanwhile, I&apos;ve also worked as a freelancer, mainly in
          eCommerce-related jobs, and a Front-End contract at{" "}
          <Link href="https://www.portuguese.hostelworld.com/">
            <a>HostelWorld</a>
          </Link>
          .
        </p>
      </div>
      <PhotoWrapper>
        <Image alt="Diogo's photo" src="diogo.png" />
      </PhotoWrapper>
    </Grid>
  </Container>
);

export default About;
