import styled, { keyframes } from "styled-components";

const MainImage = () => {
  const MainImageBlock = styled.div`
    position: relative;
    min-width: 280px;
    margin: 0px auto;
  `;

  const MainImages = styled.img`
    width: 100%;
    vertical-align: middle;

     @media (max-width: 650px) {
      height: 260px
    }
  `;

  const MainText = styled.div`
    text-align: center;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
  `;

  const MainTextTop = styled.p`
    font-size: 4.5rem;
    font-weight: 700;
    font-style: italic;

    @media (max-width: 850px) {
      font-size: 3rem;
    }

    @media (max-width: 650px) {
      font-size: 1.8rem;
    }
  `;

  const MainTextBottom = styled.p`
    margin-top: 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;

    @media (max-width: 850px) {
      font-size: 0.8rem;
    }

    @media (max-width: 650px) {
      font-size: 0.5rem;
    }
  `;

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
    overflow: hidden;
    animation: ${fadeInX} 2s ease-in-out;
  `;

  const FadeInY = styled.div`
    overflow: hidden;
    animation: ${fadeInY} 2s ease-in-out;
  `;

  return (
    <MainImageBlock>
      <MainImages
        src={`${process.env.PUBLIC_URL}/image/kumoh.png`}
        alt="Kumoh"
      />
      <MainText>
        <FadeInX>
          <MainTextTop>Possible To Reality</MainTextTop>
        </FadeInX>
        <FadeInY>
          <MainTextBottom>
            내 아이디어를 내 손으로 실현한다, HACK YOUR LIFE!
          </MainTextBottom>
        </FadeInY>
      </MainText>
    </MainImageBlock>
  );
};

export default MainImage;
