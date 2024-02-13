import styled from "styled-components";

const MainEventBlock = styled.div`
        min-width: 280px;
        margin-top: 50px;
    `

const MainEventTitle = styled.div`
        margin: 0 auto;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        background-color: #FFE6C7;
        width: 250px;
        height: 50px;
        line-height: 50px;
        border-radius: 20px;
        position: relative;
        bottom: 30px;
        box-shadow: 1px 1px 1px 1px rgb(158, 158, 158);
    `

const MainEventContent = styled.div`
        padding: 50px 20px 0 20px;
        width: 280px;
        height: 140px;
        background-color: #626262;
        color: #FFA559;
        font-size: 14px;
        border-radius: 20px;
        position: absolute;
        box-shadow: 1px 1px 1px 1px rgb(158, 158, 158);
        line-height: 20px;
    `

const MainEvent = (props) => {

    return (
        <MainEventBlock>
            <MainEventContent>{props.content}</MainEventContent>
            <MainEventTitle>
                <span>{props.month}</span>
                <span> | </span>
                <span>{props.title}</span>
            </MainEventTitle>
        </MainEventBlock>
    )
}

export default MainEvent;