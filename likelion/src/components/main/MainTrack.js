import React, { useState } from 'react';
import "../../styles/main/MainTrack.css";

const MainTrack = () => {

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
        <div id="main_track_container">
            <div className="main_category">
                ▶ 트랙 소개
            </div>
            <div id="main_tracks">
                <div
                    className="main_track"
                    id="main_track_front"
                    onMouseOver={handleMouseOverFront}
                    onMouseOut={handleMouseOutFront}
                >
                    {!isHoveredFront ?
                        <div className="main_track_default">프론트엔드</div>
                        : <div className="main_track_hover">
                            프론트엔드는 HTML, CSS 및 JavaScript와 같은 기술을 사용하여
                            사용자가 직접 볼 수 있는 웹 페이지를 만들며, 사용자 경험(UX)을 향상
                            시킵니다.
                        </div>}
                </div>
                <div
                    className="main_track"
                    id="main_track_back"
                    onMouseOver={handleMouseOverBack}
                    onMouseOut={handleMouseOutBack}
                >
                    {!isHoveredBack ?
                        <div className="main_track_default">백엔드</div>
                        : <div className="main_track_hover">
                            백엔드는 사용자가 보이지 않는 서버 측 코드와 데이터베이스와 같은 요소들을 관리합니다.
                            프론트엔드에서 요청한 작업을 처리하고 데이터를 저장, 검색, 수정하는 역할을 합니다.
                            주로 Spring, Diango 등의 프레임워크를 사용합니다.
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default MainTrack;