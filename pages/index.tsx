import type { NextPage } from "next";
import About from "../components/About";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Work from "../components/Work";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Work />
      <Education />
      <Footer />
    </>
  );
};

export default Home;
