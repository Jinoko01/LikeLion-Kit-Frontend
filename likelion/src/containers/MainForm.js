import styled from "styled-components";
import MainImage from "../components/main/MainImage";
import MainTrack from "../components/main/MainTrack";
import MainEvents from "../components/main/MainEvents";
const MainForm = () => {

    const MainBlock = styled.div`
        min-width: 1000px;
        background-color: #F0F0F0;
        overflow-x: hidden;
    `

    const MainContent = styled.div`
        margin: 0 200px;
        border: 1px solid black;
    `

    const MainCategory = styled.div`

        margin: 10px 0;
        font-size: 22px;
        font-weight: 900;
        font-style: italic;
    `
    return (
        <MainBlock>
            <MainImage></MainImage>
            <MainContent>
                <MainTrack mainCategory={MainCategory}></MainTrack>
                <MainEvents mainCategory={MainCategory}></MainEvents>
            </MainContent>
        </MainBlock>
    )
}

export default MainForm;
