import styled from "styled-components";

const SectionHeading = styled.h2`
  &:after {
    content: "";
    display: block;
    position: relative;
    top: -5px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: lightgray;
  }
`;

export { SectionHeading };
