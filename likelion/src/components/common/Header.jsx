import styled, { css } from "styled-components";
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Abril Fatface", sans-serif;
`;

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 3rem;
  }

  .navbar {
    display: flex;
    width: 60%;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    right: 2rem;

    .navBlock {
      display: flex;
      position: relative;
      font-size: 1.125rem;
      font-weight: 800;

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

      & + .navBlock {
        margin-left: 3rem;
        @media (max-width: 1000px) {
          margin-left: 2.5rem;
        }
      }

      @media (max-width: 850px) {
        display: none;
      }

      .menu,
      .menuSelectBox {
        text-decoration: none;
        color: ${palette.black[1]};
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

const NavSelectBox = styled.div`
  display: none;
  border-bottom: 1px solid ${palette.black[1]};
  border-right: 1px solid ${palette.black[1]};
  border-left: 1px solid ${palette.black[1]};
  background-color: white;
  position: absolute;
  top: 1.7rem;
  width: 100%;

  ${(props) =>
    props.show &&
    css`
      display: block;
    `}

  .selectMenu {
    display: block;
    text-decoration: none;
    color: ${palette.black[1]};
    border: 1px solid ${palette.black[1]};
    padding: 1rem;
    cursor: pointer;

    &:hover {
      background-color: ${palette.gray[3]};
    }
  }
`;

const menus = [
  {
    url: "/about",
    name: "About",
    selectBox: null,
  },
  {
    url: "/",
    name: "Project",
    selectBox: null,
  },
  {
    url: "/community",
    name: "Community",
    selectBox: ["Study", "Assign", "Inquire"],
  },
];

const Header = ({
  user,
  onLogout,
  show,
  setShow,
  selectShow,
  setSelectShow,
  MoveToTop,
}) => {
  const menuIcon = useRef(null);

  const NavigationBlockEvent = (e) => {
    if (e.target.className === "menuSelectBox") {
      e.preventDefault();
    }
    MoveToTop();
  };

  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <Link to="/" className="logo" onClick={MoveToTop}>
            <img
              src={`${process.env.PUBLIC_URL}/image/logo.png`}
              alt="logo"
              style={{ width: "100%" }}
            />
          </Link>
          <div className="navbar">
            {menus.map((menu) => (
              <div
                className="navBlock"
                onMouseEnter={menu.selectBox && (() => setSelectShow(true))}
                onMouseLeave={menu.selectBox && (() => setSelectShow(false))}
              >
                <Link
                  to={menu.url}
                  className={`menu${menu.selectBox ? "SelectBox" : ""}`}
                  onClick={NavigationBlockEvent}
                >
                  {menu.name}
                  {menu.selectBox ? "  ⌵" : null}
                </Link>
                {menu.selectBox ? (
                  <NavSelectBox show={selectShow}>
                    {menu.selectBox.map((select) => (
                      <Link to={`/community/${select}`} className="selectMenu">
                        {select}
                      </Link>
                    ))}
                  </NavSelectBox>
                ) : null}
              </div>
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
