import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const FooterBlock = styled.div`
  display: flex;
  background-color: #e4e4e4;
  padding: 30px 0 40px;

  .footerDiv {
    width: 95%;
    margin: 0 auto;

    .name {
      font-size: 0.95rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .content {
      font-size: 0.7rem;

      a {
        color: black;
        text-decoration: none;
      }
    }

    div {
      margin-bottom: 0.4rem;
    }

    .link {
      margin-top: 3rem;

      * {
        cursor: pointer;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <div className="footerDiv">
        <div className="name">금오공과대학교 멋쟁이사자처럼</div>
        <div className="content">
          Developed by 황용진, 정채연, 강민기, 김건우
        </div>
        <div className="content">
          <MailOutlineIcon
            style={{
              fontSize: "1rem",
              position: "relative",
              top: "4px",
              marginRight: "3px",
            }}
          />
          문의처: <a href="mailto:dswvgw6412@naver.com">dswvgw6412@naver.com</a>
        </div>
        <div className="link">
          <a
            href="https://www.instagram.com/likelionkumoh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon
              style={{
                backgroundColor: "black",
                color: "white",
                padding: "0.5rem",
                fontSize: "2.5rem",
                borderRadius: "50%",
              }}
            />
          </a>
        </div>
      </div>
    </FooterBlock>
  );
};

export default Footer;
