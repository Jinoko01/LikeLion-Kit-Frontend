import AuthForm from "../../components/auth/AuthForm";
import { auth } from "../../store/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { login, changeField, initializeForm } = auth();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { value, name } = e.target;
    changeField("login", name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(login.email);
    console.log(login.password);
    if (
      login.email === "test@kumoh.ac.kr" &&
      login.password === "testPassword"
    ) {
      navigate("/");
      try {
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: 12341234,
            username: "테스트유저",
            email: login.email,
            password: login.password,
          })
        );
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  };

  useEffect(() => {
    initializeForm(login);
  }, [initializeForm]);

  // useEffect(() => {
  //   if (authError) {
  //     console.log("오류 발생");
  //     console.log(authError);
  //     setError("로그인 실패");
  //   }
  //   if (auth) {
  //     console.log("로그인 성공");
  //     dispatch(check());
  //   }
  // }, [dispatch, authError, auth]);

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //     try {
  //       localStorage.setItem("user", JSON.stringify(user));
  //     } catch (e) {
  //       console.log("localStorage is not working");
  //     }
  //   }
  // }, [navigate, user]);

  return (
    <AuthForm
      type="login"
      form={login}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      changeField={changeField}
    />
  );
};

export default LoginForm;
