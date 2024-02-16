import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/common/Header";
import { logout } from "../../modules/user";
import { useCallback, useState } from "react";

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  const [show, setShow] = useState(false);
  return (
    <Header user={user} onLogout={onLogout} show={show} setShow={setShow} />
  );
};

export default HeaderContainer;
