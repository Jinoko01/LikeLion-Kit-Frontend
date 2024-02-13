import styled, { keyframes } from "styled-components";

const MainImage = () => {

    const MainImageBlock = styled.div`
        position: relative;
        min-width: 1250px;
        margin: 0px auto;
    `

    const MainImages = styled.img`
        width: 100%;
        vertical-align: middle;
    `

    const MainText = styled.div`
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        color: white;  
    `

    const MainTextTop = styled.p`
        font-size: 90px;
        font-weight: 700;
        font-style: italic;
    `

    const MainTextBottom = styled.p`
        margin-top: -5px;
        font-size: 25px;
        font-weight: 600;
    `

    const fadeInX = keyframes`
        0% {
            opacity: 0;
            transform: translateX(20px);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    `;

    const fadeInY = keyframes`
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: none;
        }
    `;
    const FadeInX = styled.div`
        font-size: medium;
        position: relative;
        overflow: hidden;
        animation: ${fadeInX} 2s ease-in-out;
    `

    const FadeInY = styled.div`
        font-size: medium;
        position: relative;
        overflow: hidden;
        animation: ${fadeInY} 2s ease-in-out;
    `

    return (
        <MainImageBlock>
            <MainImages src={`${process.env.PUBLIC_URL}/image/kumoh.png`} alt="Kumoh" />
            <MainText>
                <FadeInX>
                    <MainTextTop>Possible To Reality</MainTextTop>
                </FadeInX>
                <FadeInY>
                    <MainTextBottom>내 아이디어를 내 손으로 실현한다, HACK YOUR LIFE!</MainTextBottom>
                </FadeInY>
            </MainText>
        </MainImageBlock>
    )
}

export default MainImage;