import styled from "styled-components";

const MainEvent = (props) => {

    const MainEventBlock = styled.div`
        border: 1px solid black;
        width: 300px;
    `

    const MainEventTitle = styled.div`
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        
    `

    return (
        <MainEventBlock>
            <MainEventTitle>
                <span>{props.month}</span>
                <span>_</span>
                <span>{props.title}</span>
            </MainEventTitle>
            <div id="main_event_content">{props.content}</div>
        </MainEventBlock>
    )
}

export default MainEvent;