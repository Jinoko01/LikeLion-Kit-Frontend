import "../../styles/main/MainImage.css";

const MainImage = () => {
    return (
        <div className="main_image_container">
            <div className="main_image">
                <img src={`${process.env.PUBLIC_URL}/image/kumoh.png`} alt="Kumoh" />
            </div>
            <div className="main_text">
                <div className="fadeinX">
                    <p id="main_text_top">Possible To Reality</p>
                </div>
                <div className="fadeinY">
                    <p id="main_text_bottom">내 아이디어를 내 손으로 실현한다, HACK YOUR LIFE!</p>
                </div>
            </div>
        </div>
    )
}

export default MainImage;