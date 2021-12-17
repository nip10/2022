import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

const navbarItems = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "Education",
    href: "#education",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];

const NavbarContainer = styled(motion.ul)``;

const NavbarItem = styled.li``;

const ContactButton = styled(motion.button)``;

const Navbar = () => {
  const NavigationItems = navbarItems.map((item) => (
    <NavbarItem key={item.title}>
      <Link href={item.href}>
        <a>{item.title}</a>
      </Link>
    </NavbarItem>
  ));

  const ContactMe = (
    <ContactButton>
      <Link href={"#contact"}>
        <a>Contact me</a>
      </Link>
    </ContactButton>
  );

  return (
    <NavbarContainer>
      {NavigationItems}
      {ContactMe}
    </NavbarContainer>
  );
};

export default Navbar;
