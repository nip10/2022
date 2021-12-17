import styled from "styled-components";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Container = styled.div``;

const Header = () => (
  <Container>
    <Logo />
    <Navbar />
  </Container>
);

export default Header;
