import styled from "styled-components";
import MainImage from "../components/main/MainImage";
import MainTrack from "../components/main/MainTrack";
import MainEvents from "../components/main/MainEvents";
import MainEventsResizable from "../components/main/MainEventsResizable";
import Footer from "../components/common/Footer";

const MainBlock = styled.div`
  min-width: 290px;
  background-color: #f0f0f0;
  overflow-x: hidden;
  padding: 0 0 100px 0;
`;

const MainCategory = styled.div`
  font-size: 22px;
  font-weight: 900;
  font-style: italic;

  @media (max-width: 650px) {
      font-size: 18px;
    }

  @media (max-width: 350px) {
    font-size: 15px;
  }
`;

const MainForm = () => {

  const eventList = [
    {
      month: "5월",
      title: "아이디어톤",
      content: "특정 주제에 맞춰, 톡톡 튀는 아이디어로 승부합니다."
    },
    {
      month: "8월",
      title: "해커톤",
      content: "멋쟁이 사자처럼 대학이 진행하는 역대급 규모의 무박 2일 해커톤 행사를 만나보세요."
    },
    {
      month: "10월",
      title: "공모전",
      content: "4,000여 명의 한국, 미국 학생들이 모여 트랙별 공모전을 통해 우수 인재를 발굴합니다."
    },
    {
      month: "12월",
      title: "데모데이",
      content: "1년 동안 열과 성을 다해 만들어 낸 초기 스타트업을 발표하는 장입니다."
    },
    {
      month: "2월",
      title: "실리콘밸리 기업 탐방",
      content: "미래 우수 인재들의 글로벌 시야를 확장하기 위해, IT 꿈의 기업들이 있는 실리콘밸리로 떠납니다."
    },
  ]

  return (
    <div>
      <MainBlock>
        <MainImage />
        <div>
          <MainTrack mainCategory={MainCategory}></MainTrack>
          <hr style={{ margin: "0 auto", width: "1200px" }}></hr>
          <MainEventsResizable mainCategory={MainCategory} eventList={eventList} /> :
          <MainEvents mainCategory={MainCategory} eventList={eventList} />
        </div>
      </MainBlock>
      <Footer />
    </div>
  );
};

export default MainForm;
