import styled from "styled-components";
import HeaderContainer from "../containers/common/Headercontainer";
import WriteBlock from "../components/communityWrite/WriteBlock";
import Footer from "../components/common/Footer";

const CommunityWritePageBlock = styled.div`
  background-color: #f0f0f0;
`;

const CommunityWritePage = () => {
  return (
    <CommunityWritePageBlock>
      <HeaderContainer />
      <WriteBlock />
      <Footer />
    </CommunityWritePageBlock>
  );
};

export default CommunityWritePage;
