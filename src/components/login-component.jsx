import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../service/auth";

const LoginComponent = ({ currentUser, setCurrentUser }) => {
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [errormsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleLogin = async (e) => {
    try {
      let response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.alert("登入成功 \n 即將導向到個人資料頁面");
      navigate("/profile");
      setCurrentUser(AuthService.getCurrentUser);
    } catch (error) {
      console.log(error.response.data);
      setErrorMsg(error.response.data);
    }
  };
  return (
    <div style={{ padding: "3rem" }} className="col-md-12">
      {errormsg && <div className="alert alert-danger">{errormsg}</div>}
      <div>
        <div className="form-group">
          <label htmlFor="username">電子信箱：</label>
          <input
            onChange={handleChangeEmail}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="password">密碼：</label>
          <input
            onChange={handleChangePassword}
            type="password"
            className="form-control"
            name="password"
          />
        </div>
        <br />
        <div className="form-group">
          <button onClick={handleLogin} className="btn btn-primary btn-block">
            <span>登入系統</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
