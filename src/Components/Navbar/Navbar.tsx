import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { userActions } from "../../Store/userSlice";
import Avatar from "../Avatar";
import style from "./Navbar.module.css";

const Navbar = () => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const profile = useAppSelector((state) => state.user.user?.profilePhoto);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const logoutHandler = () => {
    dispatch(userActions.loggedOut());
    navigate("/login");
  };

  return (
    <div className={style["container"]}>
      <div className={style["navbar-container"]}>
        <div className={style["navbar-left-section"]}>
          <Link to="/">
            <h2>Resume.io</h2>
          </Link>
        </div>
        <div className={style["navbar-right-section"]}>
          <ul>
            {!isLoggedIn && (
              <li>
                <Link to="/login">
                  <button className="secondary-button">Login</button>
                </Link>
              </li>
            )}
            {isLoggedIn && (
              <li className={style["dropdown"]}>
                <Avatar
                  size="2rem"
                  classname={style["icon"]}
                  src={profile as string}
                />
                <ul className={style["dropdown-items"]}>
                  <Link to="/edit-profile" className={style["dropdown-item"]}>
                    Edit Profile
                  </Link>
                  <Link to="/my-resumes" className={style["dropdown-item"]}>
                    My Resumes
                  </Link>
                  <li
                    onClick={logoutHandler}
                    className={style["dropdown-item"]}
                  >
                    Logout
                  </li>
                </ul>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
