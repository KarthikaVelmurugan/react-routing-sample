import React from "react";
import "../style.css";
import logo from "../../images/logo.png";
import NavigationButton from "./NavigationButton";

import {
  BsFillBriefcaseFill,
  BsFillBellFill,
  BsFillBookFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { BrowserRouter, Link, Outlet, useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  return (
    <div>
      <div className="header">
        <div className="header-1">
          <img src={logo} alt="logo" height={50}></img>
        </div>
        <div className="header-2">
          <div className="nav">
            <NavigationButton
              icon={<BsFillBriefcaseFill />}
              name="Jobs"
              url="/jobs"
            />

            <NavigationButton
              icon={<BsFillBellFill />}
              name="Notifications"
              url="/notifications"
            />

            <NavigationButton
              icon={<BsFillBookFill />}
              name="Posts"
              url="/post"
            />

            <NavigationButton
              icon={<BsFillPersonFill />}
              name="Profile"
              url="/profile"
            />
          </div>

          <div className="btn">
            <input
              type="button"
              value="Sign in"
              className="signinbtn"
              onClick={() => {
                navigate("/sign-in");
              }}
            ></input>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Header;
