import { Link } from "react-router-dom";
import "./Register.scss";
import { Button } from "react-bootstrap";
import usePost from "../../api/usePost";
import { ToastContainer, toast } from "react-toastify";
import { endPoint } from "../../api/endPoint";
import { Loading } from "../../components";
import useInput from "../../api/useInput";
import React from "react";
import { t } from "i18next";

const Register = () => {
  const [inputFormData, handleChangeInputData]: any = useInput();
  const [handleRegisterPost, loading, success, errorMessage]: any = usePost(
    endPoint.register,
    inputFormData
  );

  const loginSuccess = () => toast(t("auth.successRegister"));
  const loginFail = () => toast(errorMessage);

  const inputArray = [  
    { placeholder: t("auth.username"), name: "username", type: "text" },
    { placeholder: t("auth.email"), name: "email", type: "email" },
    { placeholder: t("auth.password"), name: "password", type: "password" },
  ];

  const handleRegister = (e: any) => {
    e.preventDefault();
    handleRegisterPost();
  };

  React.useEffect(() => {
    if (!loading) {
      success && loginSuccess();
      errorMessage && loginFail();
    }
  }, [success, errorMessage]);

  return (
    <div className="register flexCenter">
      {loading && <Loading />}
      <ToastContainer />
      <form
        className="register-field flexCenterColumn"
        onSubmit={handleRegister}
      >
        <h1>{t("auth.register")}</h1>
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

        <Button type="submit" variant="warning">
          {t("auth.register")}
        </Button>
        <Link to={"/login"}>{t("auth.haveAccount")}</Link>
      </form>
    </div>
  );
};

export default Register;
