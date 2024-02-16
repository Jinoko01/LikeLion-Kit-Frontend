import styled from "styled-components";
import Responsive from "../common/Responsive";
import HeaderContainer from "../../containers/common/Headercontainer";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import AboutClub from "./AboutClub";
import Executive from "./Executive";
import Footer from "../common/Footer";

const BackgroundBlock = styled.div`
  background-color: #f0f0f0;
`;

const AboutBlock = styled(Responsive)`
  margin-top: 3rem;

  .title {
    margin-top: 2rem;
    font-size: 22px;
    font-weight: 900;
    font-style: italic;
  }
`;

const About = () => {
  return (
    <BackgroundBlock>
      <HeaderContainer />
      <AboutBlock>
        <p className="title">
          ▶ 멋쟁이사자처럼이란?
          <EmojiObjectsOutlinedIcon
            style={{
              fontSize: "32px",
              margin: "2px 0 0 5px",
              position: "relative",
              top: "8px",
            }}
          />
        </p>
        <AboutClub />
        <p className="title">
          ▶ 운영진 소개
          <AccountBoxIcon
            style={{
              fontSize: "32px",
              margin: "2px 0 0 5px",
              position: "relative",
              top: "10px",
            }}
          />{" "}
        </p>
        <Executive />
      </AboutBlock>
      <Footer />
    </BackgroundBlock>
  );
};

export default About;
