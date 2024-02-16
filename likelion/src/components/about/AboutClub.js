import styled from "styled-components";

const AboutClubBlock = styled.div`
  margin-top: 3.5rem;
  margin-bottom: 2.5rem;

  .description {
    text-align: center;

    .split {
      margin-bottom: 0.5rem;
    }

    @media (max-width: 850px) {
      font-size: 0.7rem;
    }
  }
`;

const Slogan = styled.div`
  font-size: 4em;
  font-weight: 500;
  text-align: center;
  color: #ff7710;
  margin-bottom: 4rem;

  @media (max-width: 850px) {
    font-size: 2.5rem;
  }

  @keyframes neon5 {
    from {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ffaa55,
        0 0 35px #ffaa55, 0 0 40px #ffaa55, 0 0 50px #ffaa55, 0 0 75px #ffaa55;
    }
    to {
      text-shadow: 0 0 3px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #ffaa55,
        0 0 18px #ffaa55, 0 0 20px #ffaa55, 0 0 25px #ffaa55, 0 0 75px #ffaa55;
    }
  }

  color: #ff7710;
  font-family: Abril Fatface;
  font-weight: bold;
  animation: neon5 1.5s ease-in-out infinite alternate;
`;

const BenifitsBlock = styled.div`
  .title {
    text-shadow: ;
  }
`;

const AboutClub = () => {
  return (
    <AboutClubBlock>
      <Slogan>
        <em>Possible to Reality</em>
      </Slogan>
      <p className="description">
        <b>멋쟁이사자처럼</b>은 테크 기반의 아이디어를 실현하는{" "}
        <b>국내 최대 규모 IT 창업 동아리</b>입니다.
        <div className="split" />
        <b>금오공과대학교 멋쟁이사자처럼</b>은 <b>프론트엔드, 백엔드</b>{" "}
        트랙에서 함께 지식을 공유하고 성장하는 장을 제공하며
        <div className="split" />
        다양한 프로젝트 활동을 통해 <b>기술적 성장</b>을 도모하고{" "}
        <b>협업 역량</b>을 향상시킵니다.
      </p>
      <BenifitsBlock></BenifitsBlock>
    </AboutClubBlock>
  );
};

export default AboutClub;
