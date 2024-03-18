import { Link } from "react-router-dom";
import styled from "styled-components";
import Responsive from "../common/Responsive";

const CommunityDiv = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
`;

const CommunityBlock = () => {
  return (
    <Responsive>
      <CommunityDiv>
        <Link to="/write">글쓰기</Link> <br />
        <Link to="/detail">상세 페이지</Link>
      </CommunityDiv>
    </Responsive>
  );
};

export default CommunityBlock;
