import { useLocation } from "react-router-dom";
import HeaderContainer from "../containers/common/Headercontainer";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import CommunityBlock from "../components/community/CommunityBlock";

const CommunityPageBlock = styled.div`
  background-color: #f0f0f0;

  .title {
    width: 80%;
    margin: 0 auto;
    margin-top: 4rem;
  }

  .description {
    width: 80%;
    margin: 1rem auto;
  }
`;

const CommunityPage = () => {
  const category = useLocation().state.category;
  const descriptionArr = {
    Assign: "아기사자들의 과제를 관리합니다. :)",
    Study: "스터디 자료나 관련 정보를 관리합니다. :)",
    Inquire: "궁금한점을 물어보고 답변을 남길 수 있습니다. :)",
  };

  return (
    <CommunityPageBlock>
      <HeaderContainer />
      <div className="title">▶ {category}</div>
      <div className="description">{descriptionArr[category]}</div>
      <CommunityBlock category={category} descriptionArr={descriptionArr} />
      <Footer />
    </CommunityPageBlock>
  );
};

export default CommunityPage;
