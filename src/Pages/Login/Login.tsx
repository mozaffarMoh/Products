import { Link } from "react-router-dom";
import "./Login.scss";
import { Button } from "react-bootstrap";
import useInput from "../../api/useInput";
import usePost from "../../api/usePost";
import { Loading } from "../../components";
import { endPoint } from "../../api/endPoint";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { t } from "i18next";

const Login = () => {
  const [inputFormData, handleChangeInputData]: any = useInput();
  const [handleLoginPost, loading, success, errorMessage]: any = usePost(
    endPoint.login,
    inputFormData
  );
  const loginSuccess = () => toast(t("auth.successLogin"));
  const loginFail = () => toast(errorMessage);

  const inputArray = [
    { placeholder: t("auth.username"), name: "username", type: "text" },
    { placeholder: t("auth.password"), name: "password", type: "password" },
  ];

  const handleLogin = (e: any) => {
    e.preventDefault();
    handleLoginPost();
  };

  React.useEffect(() => {
    if (!loading) {
      success && loginSuccess();
      errorMessage && loginFail();
    }
  }, [success, errorMessage]);

  return (
    <div className="login flexCenter">
      {loading && <Loading />}
      <ToastContainer />
      <form className="login-field flexCenterColumn" onSubmit={handleLogin}>
        <h1>{t("auth.login")}</h1>
        {inputArray.map((item: any, index: number) => {
          return (
            <input
              required
              key={index}
              placeholder={item.placeholder}
              name={item.name}
              type={item.type}
              onChange={(e: any) => handleChangeInputData(e.target)}
            />
          );
        })}
        <Button type="submit" variant="success">
          {t("auth.login")}
        </Button>
        <Link to={"/register"}>{t("auth.dontHaveAccount")}</Link>
      </form>
    </div>
  );
};

export default Login;
