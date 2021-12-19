import Link from "next/link";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <footer>
      <p>
        Inspired by{" "}
        <Link href="https://brittanychiang.com?utm_source=diogocardoso.dev&utm_medium=footer+credits">
          <a>BC&apos;s design</a>
        </Link>
        . Built by Diogo Cardoso using{" "}
        <Link href="https://nextjs.org?utm_source=diogocardoso.dev&utm_medium=footer+credits">
          <a>Next.JS</a>
        </Link>
        ,{" "}
        <Link href="https://styled-components.com?utm_source=diogocardoso.dev&utm_medium=footer+credits">
          <a>Styled Components</a>
        </Link>{" "}
        and{" "}
        <Link href="https://www.framer.com/motion?utm_source=diogocardoso.dev&utm_medium=footer+credits">
          <a>Framer Motion</a>
        </Link>
        .
      </p>
      <p>TODO: meter aqui stars do github</p>
    </footer>
  );
}

export default Footer;
