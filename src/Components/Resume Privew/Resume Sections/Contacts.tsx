import React from "react";
import style from "../Preview.module.css";
import Strip from "../Strip";
import { FaMobile } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { ImLink } from "react-icons/im";

function Contacts() {
  return (
    <>
      <Strip title="CONTACTS" />
      <div className={`${style["section"]} ${style["contacts-section"]}`}>
        <div className={style["contact"]}>
          <div className={style["icon"]}>
            <FaMobile />
          </div>
          <span>9428551650</span>
        </div>
        <div className={style["contact"]}>
          <div className={style["icon"]}>
            <MdMail />
          </div>
          <span>kspatel51650@gmail.com </span>
        </div>
        <div className={style["contact"]}>
          <div className={style["icon"]}>
            <ImLink />
          </div>
          <span>
            <a href="">www.example.com</a>
          </span>
        </div>
        <div className={style["contact"]}>
          <div className={style["icon"]}>
            <IoLocationSharp />
          </div>
          <span>Ahmedabad, Gujarat</span>
        </div>
      </div>
    </>
  );
}

export default Contacts;
