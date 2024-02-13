import { useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";
import palette from "../../lib/styles/palette";

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

  @media (min-width: 850px) {
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

  &: @keyframes fadeInRight {
    0% {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }

  animation: fadeInRight 0.2s;
`;

const MenuBlock = styled.div`
  displat: flex;
  flex-direction: column;

  .userInformation {
    display: flex;
    flex-direction: column;
    margin-top: 4.5rem;

    .button {
      width: 26%;
      margin: 0 auto;
      margin-top: 1.5rem;
    }
  }

  .menus {
    margin-top: 3rem;

    .menuLink {
      text-decoration: none;
      color: ${palette.black[1]};
      font-weight: 600;
    }

    .menu {
      text-align: center;
      padding: 0.5rem;
      border-bottom: 1px solid ${palette.black[0]};

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

const SideMenu = ({ show, setShow, menus, user, onLogout, menuIcon }) => {
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
              <Link to={menu.url} className="menuLink">
                <div className="menu">{menu.name}</div>
              </Link>
            ))}
          </div>
        </MenuBlock>
      </SideMenuBlock>
    </Fullscreen>
  );
};

export default SideMenu;
