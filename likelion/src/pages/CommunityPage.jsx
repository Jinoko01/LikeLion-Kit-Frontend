import { Link } from "react-router-dom";

const CommunityPage = () => {
  return (
    <div>
      <Link to="/community/write">글쓰기</Link>
      <Link to="/community/detail">상세 페이지</Link>
    </div>
  );
};

export default CommunityPage;
