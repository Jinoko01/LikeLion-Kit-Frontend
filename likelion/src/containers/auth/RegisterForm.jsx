import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../components/auth/AuthForm";
import { useNavigate } from "react-router-dom";
import { auth } from "../../store/auth";

const RegisterForm = () => {
  const { register, changeField, initializeForm } = auth();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onChange = (e) => {
    const { value, name } = e.target;
    changeField("register", name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, name, password, track, major } = register;

    if ([email, name, password, track, major].includes("")) {
      setError("빈 칸을 모두 입력하세요.");
      return;
    }
  };

  useEffect(() => {
    initializeForm(register);
  }, [initializeForm]);

  // useEffect(() => {
  //   if (authError) {
  //     setError("회원가입 실패");
  //     return;
  //   }

  //   if (auth) {
  //     console.log("회원가입 성공");
  //     console.log(auth);
  //     dispatch(check());
  //   }
  // }, [dispatch, auth, authError]);

  // useEffect(() => {
  //   if (user) {
  //     navigate("/");
  //   }
  //   try {
  //     localStorage.setItem("user", JSON.stringify(user));
  //   } catch (e) {
  //     console.log("localStorage is not working");
  //   }
  // }, [navigate, user]);

  return (
    <AuthForm
      type="register"
      form={register}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
      changeField={changeField}
    />
  );
};

export default RegisterForm;
