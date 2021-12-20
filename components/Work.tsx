import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

const Container = styled.div``;

const Work = () => {
  return (
    <>
      <Grid>
        <Container>08/2020 - 09/2021</Container>
        <Container>
          <h2>Full stack developer</h2>
          <h3>Wegho</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, nihil rerum, ipsum amet optio obcaecati excepturi
            officia veniam consequatur iusto ratione suscipit temporibus dolorem
            illo. Odit quos velit eos fugiat!
          </p>
        </Container>
        <Container>08/2020 - 09/2021</Container>
        <Container>
          <h2>Full stack developer</h2>
          <h3>Wegho</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, nihil rerum, ipsum amet optio obcaecati excepturi
            officia veniam consequatur iusto ratione suscipit temporibus dolorem
            illo. Odit quos velit eos fugiat!
          </p>
        </Container>
        <Container>08/2020 - 09/2021</Container>
        <Container>
          <h2>Full stack developer</h2>
          <h3>Wegho</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Voluptates, nihil rerum, ipsum amet optio obcaecati excepturi
            officia veniam consequatur iusto ratione suscipit temporibus dolorem
            illo. Odit quos velit eos fugiat!
          </p>
        </Container>
      </Grid>
    </>
  );
};

export default Work;
