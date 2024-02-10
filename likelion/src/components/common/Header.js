import styled from "styled-components";
import Responsive from "./Responsive";
import Button from "./Button";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 3;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .navbar {
    display: flex;
    width: 60%;
    justify-content: space-between;
    position: relative;
    right: 2rem;

    .menu {
      display: inline-block;
      position: relative;
      font-size: 1.125rem;
      font-weight: 800;
      letter-space: 2px;
      text-decoration: none;
      color: ${palette.black[1]};

      &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        top: 1.75rem;
        position: absolute;
        background: #454545;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
      }

      &:hover:after {
        width: 100%;
        left: 0;
        top: 1.75rem;
      }

      &:hover {
        color: ${palette.black[0]};
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const Header = ({ user, onLogout }) => {
  const menus = [
    {
      url: "/about",
      name: "About",
    },
  ];

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/image/logo.png`}
              alt="logo"
              style={{ width: "50%" }}
            />
          </Link>
          <div className="navbar">
            {menus.map((menu) => (
              <Link to={menu.url} className="menu">
                {menu.name}
              </Link>
            ))}
          </div>
          {user ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button lightorange onClick={onLogout}>
                로그아웃
              </Button>
            </div>
          ) : (
            <div className="right">
              <Button lightorange to="/login">
                로그인
              </Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

export default Header;
