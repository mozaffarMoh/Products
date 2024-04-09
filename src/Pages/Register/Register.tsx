import { Link } from "react-router-dom";
import "./Register.scss";
import { Button } from "react-bootstrap";
import usePost from "../../api/usePost";
import { ToastContainer, toast } from "react-toastify";
import { endPoint } from "../../api/endPoint";
import { Loading } from "../../components";
import useInput from "../../api/useInput";
import React from "react";

const Register = () => {
  const [inputFormData, handleChangeInputData]: any = useInput();
  const [handleRegisterPost, loading, success, errorMessage]: any = usePost(
    endPoint.register,
    inputFormData
  );

  const loginSuccess = () => toast("Create account has been successful");
  const loginFail = () => toast(errorMessage);

  const inputArray = [
    { placeholder: "Username", name: "username", type: "text" },
    { placeholder: "Email", name: "email", type: "email" },
    { placeholder: "Password", name: "password", type: "password" },
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
        <h1>Register</h1>
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
          Register
        </Button>
        <Link to={"/login"}>I have an account</Link>
      </form>
    </div>
  );
};

export default Register;
