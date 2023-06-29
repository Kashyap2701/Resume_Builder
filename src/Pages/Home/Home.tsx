import React from "react";
import style from "./Home.module.css";
import resume from "../../Assets/resume.png";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      {/* Render the Navbar component */}
      <Navbar />
      <div className={style.container}>
        <div className={style["leading-container"]}>
          <motion.div
            initial={{ x: "calc(-50vw)" }}
            animate={{ x: 0 }}
            transition={{ duration: "1", repeat: 0 }}
            className={style["leading-action-container"]}
          >
            <h1>
              Create your Resume with free <span>Resume.io</span>
            </h1>
            {/* Button to create a new resume */}
            <Link to={`/create-resume`}>
              <button className="primary-button">Create Resume</button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ x: "calc(50vw)" }}
            animate={{ x: 0 }}
            transition={{ duration: "1", repeat: 0 }}
            className={style["leading-img-container"]}
          >
            <img src={resume} alt="resume" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
