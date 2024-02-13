import React, { useState } from 'react';
import styled from 'styled-components';

const MainTracksBlock = styled.div`
        margin: 100px auto;
        width: 1000px;
    `

const MainTracks = styled.div`
        display: flex;
        justify-content: space-between;
    `

const MainTrackBlock = styled.div`
        width: 460px;
        height: 250px;
        border-radius: 20px;
        box-shadow: 2px 2px 2px 2px rgb(158, 158, 158);
        display: flex;
        color: black;
        opacity: 80%;
    `

const MainTrackFront = styled.div`
        display: block;
        margin: 20px 0;
        width: 460px;
        background-color: #FFA559;
        border-radius: 20px;
        opacity: 0.8;

    `

const MainTrackBack = styled.div`
        margin: 20px 0 20px 0;
        width: 460px;
        background-color: #FF6000;
        border-radius: 20px;
        opacity: 80%;
    `

const MainTrackDeault = styled.div`
        margin: 0 auto;
        line-height: 250px;
        font-weight: bold;
        font-size: 20px;   
    `

const MainTrackHover = styled.div`
        padding: 60px 50px;
        cursor: pointer;
        line-height: 160%;
        align-items: center;
        background-color: #2b2b2b;
        color: white;
        font-weight: 200;
        border-radius: 20px;
        font-style: italic; 
    `

const MainTrackImageBox = styled.div`
        margin: 20px 0;
        width: 460px;
        height: 250px;
        border-radius: 20px; 
        box-shadow: 2px 2px 2px 2px rgb(158, 158, 158);    
        overflow: hidden;
    `;

const MainTrackImage = styled.img`
        width: 460px;
        height: 250px;
        border-radius: 20px;    
 
        &.front-img {
            transform: scale(${props => (props.isHoveredFront ? '1.1' : '1')});
        }

        &.back-img {
            transform: scale(${props => (props.isHoveredBack ? '1.1' : '1')});
        }
`;

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

    return (
        <MainTracksBlock>
            <props.mainCategory>
                ▶ 트랙 소개
            </props.mainCategory>
            <MainTracks>
                <MainTrackFront>
                    <MainTrackBlock
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
                    </MainTrackBlock>
                </MainTrackFront>
                <MainTrackImageBox>
                    <MainTrackImage
                        className='front-img'
                        src={`${process.env.PUBLIC_URL} /image/front.png`}
                        alt="front"
                        isHoveredFront={isHoveredFront}
                    />
                </MainTrackImageBox>
            </MainTracks>
            <MainTracks>
                <MainTrackImageBox>
                    <MainTrackImage
                        className='back-img'
                        src={`${process.env.PUBLIC_URL} /image/back.png`}
                        alt="back"
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
                        {!isHoveredBack ?
                            <MainTrackDeault>백엔드</MainTrackDeault>
                            : <MainTrackHover>
                                백엔드는 사용자가 보이지 않는 서버 측 코드와 데이터베이스와 같은 요소들을 관리합니다.
                                프론트엔드에서 요청한 작업을 처리하고 데이터를 저장, 검색, 수정하는 역할을 합니다.
                                주로 Spring, Diango 등의 프레임워크를 사용합니다.
                            </MainTrackHover>}
                    </MainTrackBlock>
                </MainTrackBack>
            </MainTracks>
        </MainTracksBlock>
    )
}

export default MainTrack;