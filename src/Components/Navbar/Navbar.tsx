import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style["container"]}>
      <div className={style["navbar-container"]}>
        <div className={style["navbar-left-section"]}>
          <h2>Resume.io</h2>
        </div>
        <div className={style["navbar-right-section"]}>
          <ul>
            <li>
              <button className="secondary-button">Login</button>
            </li>
            <li className={style["dropdown"]}>
              <Avatar size="2rem" classname={style["icon"]} />
              <ul className={style["dropdown-items"]}>
                <Link to="/edit-profile" className={style["dropdown-item"]}>
                  Edit Profile
                </Link>
                <Link to="/my-resumes" className={style["dropdown-item"]}>
                  My Resumes
                </Link>
                <Link to="/login" className={style["dropdown-item"]}>
                  Logout
                </Link>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
