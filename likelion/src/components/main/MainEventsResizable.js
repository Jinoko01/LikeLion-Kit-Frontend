import MainEvent from "./MainEvent";
import styled from "styled-components";
import EventIcon from "@mui/icons-material/Event";

const MainEventsBlock = styled.div`
  margin: 5rem auto;
  max-width: 340px;         
  text-align: center;

  @media (min-width: 1020px) {
    display: none;
  }
`;

const MainEventsTitle = styled.div`
  display: flex;
`;

const MainEventBlock = styled.div`
  margin: 0 auto;
  max-width: 280px;
  justify-content: center;
  margin-bottom: 100px;
`;

const MainEventArrow = styled.img`
  margin: 10px;
  height: 20px;
  margin-top: 110px;
  transform:rotate(90deg);
`;

const MainEventsResizable = (props) => {
    return (
        <MainEventsBlock>
            <MainEventsTitle>
                <props.mainCategory>▶ 주요 행사</props.mainCategory>
                <EventIcon
                    style={{ fontSize: "30px", margin: "2px 0 0 5px" }}
                ></EventIcon>
            </MainEventsTitle>
            <MainEventBlock>
                <MainEvent
                    month={props.eventList[0].month}
                    title={props.eventList[0].title}
                    content={props.eventList[0].content}
                />
                <MainEventArrow
                    src={`${process.env.PUBLIC_URL}/image/eventArrorRight.png`}
                    alt="arrorRight"
                />
                <MainEvent
                    month={props.eventList[1].month}
                    title={props.eventList[1].title}
                    content={props.eventList[1].content}
                />
                <MainEventArrow
                    src={`${process.env.PUBLIC_URL}/image/eventArrorRight.png`}
                    alt="arrorRight"
                />
                <MainEvent
                    month={props.eventList[2].month}
                    title={props.eventList[2].title}
                    content={props.eventList[2].content}
                />
                <MainEventArrow
                    src={`${process.env.PUBLIC_URL}/image/eventArrorRight.png`}
                    alt="arrorRight"
                />
                <MainEvent
                    month={props.eventList[3].month}
                    title={props.eventList[3].title}
                    content={props.eventList[3].content}
                />
                <MainEventArrow
                    src={`${process.env.PUBLIC_URL}/image/eventArrorRight.png`}
                    alt="arrorRight"
                />
                <MainEvent
                    month={props.eventList[4].month}
                    title={props.eventList[4].title}
                    content={props.eventList[4].content}
                />
            </MainEventBlock>
        </MainEventsBlock>
    )
}

export default MainEventsResizable;