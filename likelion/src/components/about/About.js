import styled from "styled-components";
import Responsive from "../common/Responsive";
import HeaderContainer from "../../containers/common/Headercontainer";

const AboutBlock = styled.div`
  margin-top: 2rem;

  p {
    font-weight: 900;
  }
`;

const About = () => {
  return (
    <>
      <HeaderContainer />
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
