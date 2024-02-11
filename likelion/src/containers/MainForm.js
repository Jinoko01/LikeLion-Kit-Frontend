import styled from "styled-components";
import MainImage from "../components/main/MainImage";
import MainTrack from "../components/main/MainTrack";
import MainEvents from "../components/main/MainEvents";
const MainForm = () => {

    const MainBlock = styled.div`
        min-width: 800px;
        background-color: #F0F0F0;
        overflow-x: hidden;
    `

    const MainCategory = styled.div`
        font-size: 22px;
        font-weight: 900;
        font-style: italic;
    `
    return (
        <MainBlock>
            <MainImage></MainImage>
            <div>
                <MainTrack mainCategory={MainCategory}></MainTrack>
                <hr style={{ margin: '0 auto', width: '1200px' }}></hr>
                <MainEvents mainCategory={MainCategory}></MainEvents>
            </div>
        </MainBlock>
    )
}

export default MainForm;
