import { Link, useLocation } from "react-router-dom";

const CommunityPage = () => {
  const category = useLocation().state.category;

  return (
    <div>
      <div>▶ {category}</div>
      <Link to="/write">글쓰기</Link> <br />
      <Link to="/detail">상세 페이지</Link>
    </div>
  );
};

export default CommunityPage;
