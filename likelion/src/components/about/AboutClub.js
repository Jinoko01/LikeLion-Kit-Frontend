import styled from "styled-components";
import palette from "../../lib/styles/palette";

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

  .titles {
    margin-top: 4rem;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 1.5rem;
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
  display: flex;
`;

const Benifits = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 4rem;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Benifit = styled.div`
  display: flex;
  flex-direction: column;
  width: 36%;
  margin: 0 2rem;
  background-color: #d9d9d9;
  border-radius: 15px;
  border: 1px solid #454545;
  padding: 0.5rem 0.7rem;

  @media (max-width: 1150px) {
    width: 22rem;
  }

  @media (max-width: 650px) {
    width: 18rem;
    font-size: 0.8rem;
  }

  .benifitTitleDiv {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 1rem;

    .benifitNumber {
      color: white;
      background: ${palette.lightorange[0]};
      padding: 0.2rem 0.6rem;
      width: 10%;
      text-align: center;
      border: 1px solid rgba(0, 0, 0, 0.21);
      border-bottom-color: rgba(0, 0, 0, 0.34);
      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.34) inset,
        0 2px 0 -1px rgba(0, 0, 0, 0.13), 0 3px 0 -1px rgba(0, 0, 0, 0.08),
        0 3px 13px -1px rgba(0, 0, 0, 0.21);
    }

    .benifitTitle {
      padding: 0.4rem 0.6rem 0 0.6rem;
    }
  }

  .benifitContentDiv {
    margin-top: 1rem;

    .benifitContent {
      margin-left: 1rem;

      li {
        margin-bottom: 0.5rem;
      }
    }
  }
`;

const benifitsArr = [
  {
    number: 1,
    title: "온/오프라인 학습 제공",
    contents: [
      "멋쟁이사자처럼에서 학생들의 학습을 위해 테크잇 VOD 강의를 무료로 제공합니다.",
      "매 주 1회 오프라인 스터디를 통해 트랙 별 웹 개발 기술을 직접 배웁니다.",
    ],
  },
  {
    number: 2,
    title: "멋사에서 제공하는 대외적 행사 참여",
    contents: [
      "아이디어톤, 해커톤, 공모전 등 다양한 행사에 참여하여 본인의 아이디어를 실현할 수 있는 기회를 얻을 수 있습니다.",
    ],
  },
  {
    number: 3,
    title: "네트워킹 기회 및 프로젝트 경험",
    contents: [
      "웹 개발에 관심이 있는 사람들과의 교류를 통해 네트워킹 기회를 제공합니다.",
      "멋사에서 진행하는 행사들에 참여하며 현업에서 필요로 하는 실전 프로젝트 경험을 쌓을 수 있습니다.",
    ],
  },
  {
    number: 4,
    title: "멋쟁이사자처럼 수료증 발급",
    contents: [
      "멋쟁이사자처럼에서의 경험은 취업 시에 경쟁력을 높여줄 수 있습니다.",
      "많은 기업들이 실무 경험이 풀부한 지원자를 선호하므로 취업 시 유리한 요소가 될 수 있습니다.",
    ],
  },
];

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
      <div className="titles">활동혜택</div>
      <hr />
      <BenifitsBlock>
        <Benifits>
          {benifitsArr.map(({ number, title, contents }) => (
            <Benifit>
              <div className="benifitTitleDiv">
                <div className="benifitNumber">{number}</div>
                <div className="benifitTitle">{title}</div>
              </div>
              <hr />
              <div className="benifitContentDiv">
                <ul className="benifitContent">
                  {contents.map((content) => (
                    <li>{content}</li>
                  ))}
                </ul>
              </div>
            </Benifit>
          ))}
        </Benifits>
      </BenifitsBlock>
    </AboutClubBlock>
  );
};

export default AboutClub;
