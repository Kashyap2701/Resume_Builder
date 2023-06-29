import React from "react";
import style from "../Preview.module.css";
import Strip from "../Strip";
import { FaMobile } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { ImLink } from "react-icons/im";
import { useAppSelector } from "../../../Store/hooks";

function Contacts() {
  const resumeColor = useAppSelector(
    (state) => state.curResume.resumeDetails.color
  );
  const contacts = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.contacts
  );
  // const isEmpty = useAppSelector((state) => state.contact.isempty);
  return (
    <>
      {contacts.email != "" && (
        <>
          <Strip title="CONTACTS" />
          <div className={`${style["section"]} ${style["contacts-section"]}`}>
            {contacts.mobileno && (
              <div className={style["contact"]}>
                <div className={style["icon"]}>
                  <FaMobile style={{ color: `${resumeColor}` }} />
                </div>
                <span>{contacts.mobileno}</span>
              </div>
            )}
            {contacts.email && (
              <div className={style["contact"]}>
                <div className={style["icon"]}>
                  <MdMail style={{ color: `${resumeColor}` }} />
                </div>
                <span>{contacts.email}</span>
              </div>
            )}
            {contacts.website && (
              <div className={style["contact"]}>
                <div className={style["icon"]}>
                  <ImLink style={{ color: `${resumeColor}` }} />
                </div>
                <span>
                  <a href="">{contacts.website}</a>
                </span>
              </div>
            )}
            {contacts.address && (
              <div className={style["contact"]}>
                <div className={style["icon"]}>
                  <IoLocationSharp style={{ color: `${resumeColor}` }}  />
                </div>
                <span>{contacts.address}</span>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Contacts;
