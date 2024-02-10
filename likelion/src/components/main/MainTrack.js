import React, { useState } from 'react';
import styled from 'styled-components';

const MainTrack = (props) => {

    const [isHoveredFront, setIsHoveredFront] = useState(false);
    const [isHoveredBack, setIsHoveredBack] = useState(false);

    const handleMouseOverFront = () => {
        setIsHoveredFront(true);
    }

    const handleMouseOutFront = () => {
        setIsHoveredFront(false);
    }

    const handleMouseOverBack = () => {
        setIsHoveredBack(true);
    }

    const handleMouseOutBack = () => {
        setIsHoveredBack(false);
    }


    //style

    const MainTrackBlock = styled.div`
        margin: 100px 0;
        border: 1px solid black;
    `

    const MainTracks = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 50px;
    `

    const MainTrack = styled.div`
        width: 450px;
        height: 220px;
        border-radius: 20px;
        box-shadow: 2px 2px 2px 2px rgb(158, 158, 158);
        display: flex;
        color: black;
        opacity: 80%;
    `

    const MainTrackFront = styled.div`
        background-color: #FFA559;
        border-radius: 20px;
        opacity: 80%;
    `

    const MainTrackBack = styled.div`
        background-color: #FF6000;
        border-radius: 20px;
        opacity: 80%;
    `

    const MainTrackDeault = styled.div`
        margin: 0 auto;
        line-height: 220px;
        font-weight: bold;
        font-size: 20px;   
    `

    const MainTrackHover = styled.div`
        padding: 50px 50px;
        cursor: pointer;
        line-height: 150%;
        align-items: center;
        background-color: #2b2b2b;
        color: white;
        font-weight: 200;
        border-radius: 20px;
        font-style: italic; 
    `

    return (
        <MainTrackBlock>
            <props.mainCategory>
                ▶ 트랙 소개
            </props.mainCategory>
            <MainTracks>
                <MainTrackFront>
                    <MainTrack
                        id="main_track_front"
                        onMouseOver={handleMouseOverFront}
                        onMouseOut={handleMouseOutFront}
                    >
                        {!isHoveredFront ?
                            <MainTrackDeault>프론트엔드</MainTrackDeault>
                            : <MainTrackHover>
                                프론트엔드는 HTML, CSS 및 JavaScript와 같은 기술을 사용하여
                                사용자가 직접 볼 수 있는 웹 페이지를 만들며, 사용자 경험(UX)을 향상
                                시킵니다.
                            </MainTrackHover>}
                    </MainTrack>
                </MainTrackFront>
                <MainTrackBack>
                    <MainTrack
                        className="main_track"
                        id="main_track_back"
                        onMouseOver={handleMouseOverBack}
                        onMouseOut={handleMouseOutBack}
                    >
                        {!isHoveredBack ?
                            <MainTrackDeault>백엔드</MainTrackDeault>
                            : <MainTrackHover>
                                백엔드는 사용자가 보이지 않는 서버 측 코드와 데이터베이스와 같은 요소들을 관리합니다.
                                프론트엔드에서 요청한 작업을 처리하고 데이터를 저장, 검색, 수정하는 역할을 합니다.
                                주로 Spring, Diango 등의 프레임워크를 사용합니다.
                            </MainTrackHover>}
                    </MainTrack>
                </MainTrackBack>
            </MainTracks>
        </MainTrackBlock>
    )
}

export default MainTrack;