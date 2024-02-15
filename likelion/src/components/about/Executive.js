import styled from "styled-components";

const ExecutiveBlock = styled.div`
  margin-top: 2rem;
  padding-bottom: 4rem;
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const ExecutiveDiv = styled.div`
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px rgb(158, 158, 158);
  background-color: white;
  width: 25rem;

  div {
    text-align: center;
  }

  .name {
    font-size: 1.5em;
    font-weight: 700;
    padding-top: 0.8rem;
    padding-bottom: 0.1rem;
  }

  .role {
    color: #808080;
    font-size: 0.88rem;
    font-weight: 700;
  }

  .line {
    padding-bottom: 1rem;
  }

  .feature {
    display: flex;
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
    padding-bottom: 1.5rem;

    .key {
      color: #808080;
      font-weight: 600;
    }

    .value {
      font-weight: 600;
    }
  }

  @media (max-width: 500px) {
    width: 20rem;
  }
`;

const executiveArr = [
  {
    name: "황용진",
    role: "대표 & 프론트엔드 트랙장",
    feature: {
      Major: "컴퓨터공학과",
      Email: "dswvgw6412@naver.com",
      Git: "Hwangyongjin",
      MBTI: "INTJ",
    },
  },
  {
    name: "정채연",
    role: "부대표 & 프론트엔드 운영진",
    feature: {
      Major: "컴퓨터소프트웨어공학과",
      Email: "rtfgvb098@naver.com",
      Git: "chaeyeon41",
      MBTI: "ENFJ",
    },
  },
  {
    name: "강민기",
    role: "백엔드 트랙장",
    feature: {
      Major: "컴퓨터공학과",
      Email: "alsrlweqe@gmail.com",
      Git: "kang20",
      MBTI: "INFJ",
    },
  },
  {
    name: "김건우",
    role: "백엔드 운영진",
    feature: {
      Major: "컴퓨터공학과",
      Email: "kwforu123@naver.com",
      Git: "kimgunwooo",
      MBTI: "ISFP",
    },
  },
];

const Executive = () => {
  return (
    <ExecutiveBlock>
      {executiveArr.map(({ name, role, feature }) => (
        <ExecutiveDiv>
          <div className="name">{name}</div>
          <div className="role">{role}</div>
          <div className="line">
            <img
              src={`${process.env.PUBLIC_URL}/image/ExecutiveLine.png`}
              alt="line"
              style={{ width: "85%" }}
            />
          </div>
          {Object.entries(feature).map(([key, value]) => (
            <div className="feature">
              <div className="key">{key}</div>
              <div className="value">{value}</div>
            </div>
          ))}
        </ExecutiveDiv>
      ))}
    </ExecutiveBlock>
  );
};

export default Executive;
