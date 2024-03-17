import { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";
import { fadeRightToLeft } from "../../lib/styles/fadeAnimation";

const Fullscreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    display: none;
  }
`;

const SideMenuBlock = styled.div`
  position: absolute;
  top: 4rem;
  right: 0;
  bottom: 0;
  background: white;
  width: 290px;
  animation: ${fadeRightToLeft} 0.2s;
`;

const MenuBlock = styled.div`
  displat: flex;
  flex-direction: column;

  .userInformation {
    display: flex;
    flex-direction: column;
    margin-top: 4.5rem;

    .button {
      width: 30%;
      margin: 0 auto;
      margin-top: 1.5rem;
    }
  }

  .menus {
    margin-top: 3rem;

    .menuDiv {
      position: relative;
    }

    .menuLink,
    .menuLinkSelectBox {
      text-decoration: none;
      color: ${palette.black[1]};
      font-weight: 600;
    }

    .menu {
      text-align: center;
      padding: 0.8rem;
      border-bottom: 1px solid #c8c8c8;

      &:hover {
        background-color: ${palette.gray[1]};
      }
    }
  }
`;

const UserInfo = styled.div`
  display: inline-block;
  text-align: center;
  font-weight: 900;
`;

const NavSelectBox = styled.div`
  transition: 0.5s;
  max-height: 0;
  overflow: hidden;
  background-color: white;
  position: absolute;
  top: 2.9rem;
  width: 100%;

  ${(props) =>
    props.show &&
    css`
      max-height: 400px;
    `}

  .selectMenu {
    display: block;
    text-decoration: none;
    text-align: center;
    color: ${palette.lightorange[0]};
    border-bottom: 1px solid #c8c8c8;
    padding: 1rem;
    cursor: pointer;

    &:hover {
      background-color: ${palette.gray[3]};
    }
  }
`;

const SideMenu = ({
  show,
  setShow,
  menus,
  user,
  onLogout,
  menuIcon,
  selectShow,
  setSelectShow,
  NavigationBlockEvent,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        !menuIcon.current.contains(e.target)
      ) {
        setShow(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [ref, setShow, menuIcon]);

  if (!show) return null;

  return (
    <Fullscreen>
      <SideMenuBlock ref={ref}>
        <MenuBlock>
          {user ? (
            <div className="userInformation">
              <UserInfo>{user.username}</UserInfo>
              <Button lightorange onClick={onLogout} className="button">
                Logout
              </Button>
            </div>
          ) : (
            <div className="userInformation">
              <UserInfo>로그인을 먼저 해주세요</UserInfo>
              <Button lightorange to="/login" className="button">
                Login
              </Button>
            </div>
          )}
          <div className="menus">
            {menus.map((menu) => (
              <div
                className="menuDiv"
                onMouseEnter={menu.selectBox && (() => setSelectShow(true))}
                onMouseLeave={menu.selectBox && (() => setSelectShow(false))}
              >
                <Link
                  to={menu.url}
                  className={`menuLink${menu.selectBox ? "SelectBox" : ""}`}
                  onClick={NavigationBlockEvent}
                >
                  <div className="menu">{menu.name}</div>
                </Link>
                {menu.selectBox && (
                  <NavSelectBox show={selectShow}>
                    {menu.selectBox.map((select) => (
                      <Link
                        to="/community"
                        state={{ category: select }}
                        className="selectMenu"
                      >
                        {select}
                      </Link>
                    ))}
                  </NavSelectBox>
                )}
              </div>
            ))}
          </div>
        </MenuBlock>
      </SideMenuBlock>
    </Fullscreen>
  );
};

export default SideMenu;
