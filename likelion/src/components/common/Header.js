import styled from "styled-components";
import Responsive from "./Responsive";
import Button from "./Button";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SideMenu from "./SideMenu";
import { useRef } from "react";

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  z-index: 31;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 5%;
  }

  .navbar {
    display: flex;
    width: 60%;
    justify-content: flex-start;
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

      & + .menu {
        margin-left: 3rem;
      }

      @media (max-width: 850px) {
        display: none;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    @media (max-width: 850px) {
      display: none;
    }
  }

  .rightMenu {
    display: none;
    cursor: pointer;

    @media (max-width: 850px) {
      display: flex;
      align-items: center;
    }
  }
`;

const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

const menus = [
  {
    url: "/about",
    name: "About",
  },
  {
    url: "/",
    name: "Project",
  },
  {
    url: "/",
    name: "Inquire",
  },
  {
    url: "/",
    name: "Assignment",
  },
  {
    url: "/",
    name: "Study",
  },
];

const Header = ({ user, onLogout, show, setShow }) => {
  const menuIcon = useRef(null);

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo">
            <img
              src={`${process.env.PUBLIC_URL}/image/logo.png`}
              alt="logo"
              style={{ width: "100%" }}
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
                Logout
              </Button>
            </div>
          ) : (
            <div className="right">
              <Button lightorange to="/login">
                Login
              </Button>
            </div>
          )}
          {!show ? (
            <MenuIcon
              className="rightMenu"
              onClick={() => setShow(!show)}
              ref={menuIcon}
            />
          ) : (
            <CloseIcon
              className="rightMenu"
              onClick={() => setShow(!show)}
              ref={menuIcon}
            />
          )}
        </Wrapper>
      </HeaderBlock>
      <SideMenu
        show={show}
        setShow={setShow}
        menus={menus}
        user={user}
        onLogout={onLogout}
        menuIcon={menuIcon}
      />
      <Spacer />
    </>
  );
};

export default Header;
