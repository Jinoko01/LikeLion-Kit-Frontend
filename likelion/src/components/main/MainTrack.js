import React, { useState } from "react";
import styled from "styled-components";

const MainTracksBlock = styled.div`
  margin: 100px auto;
  max-width: 1000px;

  @media (max-width: 850px) {
    width: 340px;
  }

  @media (max-width: 650px) {
      width: 250px;
  }
`;

const MainTracks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const MainTrackBlock = styled.div`
  height: 250px;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px rgb(158, 158, 158);
  display: flex;
  color: black;
  opacity: 80%;

  @media (max-width: 850px) {
    max-height: 200px;
  }
  `;

const MainTrackFront = styled.div`
  display: block;
  margin: 20px 0;
  width: 28.5rem;
  background-color: #ffa559;
  border-radius: 20px;
  opacity: 0.8;
  gap: 1rem;

  @media (max-width: 850px) {
    margin: 2rem auto;
    width: 20rem;
  }
`;

const MainTrackBack = styled.div`
  margin: 20px 0 20px 0;
  width: 28.5rem;
  background-color: #ff6000;
  border-radius: 20px;
  opacity: 80%;

  @media (max-width: 850px) {
    margin: 0 auto;
    width: 20rem;
  }
`;

const MainTrackDefault = styled.div`
  margin: 0 auto;
  line-height: 250px;
  font-weight: bold;
  font-size: 20px;

  @media (max-width: 850px) {
    line-height: 200px;
    font-size: 18px;
  }

  @media (max-width: 650px) {
    font-size: 14px 
  }
`;

const MainTrackHover = styled.div`
  padding: 12% 9%;
  cursor: pointer;
  line-height: 160%;
  align-items: center;
  background-color: #2b2b2b;
  color: white;
  border-radius: 20px;
  font-style: italic;

  @media (max-width: 850px) {
    margin: 0 auto;
    padding: 10% 9%;
    font-size: 14px;
  }

  @media (max-width: 650px) {
    font-size: 11px;
    padding: 20% 10%;
  }
`;

const MainTrackImageBox = styled.div`
  margin: 20px 0;
  width: 28.5rem;
  height: 250px;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 2px rgb(158, 158, 158);
  overflow: hidden;

  @media (max-width: 850px) {
    display: none;
  }
`;

const MainTrackImage = styled.img`
  width: 28.5rem;
  height: 250px;
  border-radius: 20px;

  &.front-img {
    transform: scale(${(props) => (props.isHoveredFront ? "1.1" : "1")});
  }

  &.back-img {
    transform: scale(${(props) => (props.isHoveredBack ? "1.1" : "1")});
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

const MainTrack = (props) => {
  const [isHoveredFront, setIsHoveredFront] = useState(false);
  const [isHoveredBack, setIsHoveredBack] = useState(false);

  const handleMouseOverFront = () => {
    setIsHoveredFront(true);
  };

  const handleMouseOutFront = () => {
    setIsHoveredFront(false);
  };

  const handleMouseOverBack = () => {
    setIsHoveredBack(true);
  };

  const handleMouseOutBack = () => {
    setIsHoveredBack(false);
  };

  return (
    <MainTracksBlock>
      <props.mainCategory>▶ 트랙 소개</props.mainCategory>
      <MainTracks>
        <MainTrackFront>
          <MainTrackBlock
            id="main_track_front"
            onMouseOver={handleMouseOverFront}
            onMouseOut={handleMouseOutFront}
          >
            {!isHoveredFront ? (
              <MainTrackDefault>프론트엔드</MainTrackDefault>
            ) : (
              <MainTrackHover>
                프론트엔드는 HTML, CSS 및 JavaScript와 같은 기술을 사용하여
                사용자가 직접 볼 수 있는 웹 페이지를 만들며, 사용자 경험(UX)을
                향상 시킵니다.
              </MainTrackHover>
            )}
          </MainTrackBlock>
        </MainTrackFront>
        <MainTrackImageBox>
          <MainTrackImage
            className="front-img"
            src={`${process.env.PUBLIC_URL} /image/front.png`}
            style={{ width: "100%" }}
            alt="front"
            isHoveredFront={isHoveredFront}
          />
        </MainTrackImageBox>
      </MainTracks>
      <MainTracks>
        <MainTrackImageBox>
          <MainTrackImage
            className="back-img"
            src={`${process.env.PUBLIC_URL} /image/back.png`}
            alt="back"
            style={{ width: "100%" }}
            isHoveredBack={isHoveredBack}
          />
        </MainTrackImageBox>
        <MainTrackBack>
          <MainTrackBlock
            className="main_track"
            id="main_track_back"
            onMouseOver={handleMouseOverBack}
            onMouseOut={handleMouseOutBack}
          >
            {!isHoveredBack ? (
              <MainTrackDefault>백엔드</MainTrackDefault>
            ) : (
              <MainTrackHover>
                백엔드는 사용자가 보이지 않는 서버 측 코드와 데이터베이스와 같은
                요소들을 관리합니다. 프론트엔드에서 요청한 작업을 처리하고
                데이터를 저장, 검색, 수정하는 역할을 합니다. 주로 Spring, Diango
                등의 프레임워크를 사용합니다.
              </MainTrackHover>
            )}
          </MainTrackBlock>
        </MainTrackBack>
      </MainTracks>
    </MainTracksBlock>
  );
};

export default MainTrack;
