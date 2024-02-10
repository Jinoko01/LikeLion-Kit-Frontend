import styled from "styled-components";
import Responsive from "../common/Responsive";
import Header from "../common/Header";

const AboutBlock = styled.div`
  margin-top: 5rem;

  p {
    font-weight: 900;
  }
`;

const About = () => {
  return (
    <>
      <Header />
      <Responsive>
        <AboutBlock>
          <p>
            <em>▶</em> 운영진 소개
          </p>
        </AboutBlock>
      </Responsive>
    </>
  );
};

export default About;
