import React from "react";
import style from "./Home.module.css";
import resume from "../../Assets/resume.png";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={style["container"]}>
        <div className={style["leading-container"]}>
          <div className={style["leading-action-container"]}>
            <h1>
              Create your Resume with free <span>Resume.io</span>
            </h1>
            <Link to="/create-resume">
              <button className="primary-button">Create Resume</button>
            </Link>
          </div>
          <div className={style["leading-img-container"]}>
            <img src={resume} alt="resume" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
