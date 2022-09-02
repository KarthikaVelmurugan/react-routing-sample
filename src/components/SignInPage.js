import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Dashboard/Header";
import "./style.css";
function SignInPage() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (data && data.username != "" && data.password != "") {
      alert("Successfully Logged in!")
     navigate("/")
    }
  };

  const renderForm = (
    <div className="form">
      <form>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="uname"
            required
            onChange={(e) => {
              setData({ ...data, username: e.target.value });
            }}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => {
              setData({ ...data, password: e.target.value });
            }}
          />
        </div>
        <div className="button-container">
          <input type="submit" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
  return (
    <div>
      <Header/>
      <div className="signin">
        <div className="login-form">
          <div className="title">Sign In</div>
          {renderForm}
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
