import style from "./Preview.module.css";
import Contacts from "./Resume Sections/Contacts";
import ProfilePhoto from "./Resume Sections/ProfilePhoto";
import Skills from "./Resume Sections/Skills";
import Interest from "./Resume Sections/Interest";
import { ProfileInfo } from "./Resume Sections/ProfileInfo";
import About from "./Resume Sections/About";
import WorkExperience from "./Resume Sections/WorkExperience";
import Education from "./Resume Sections/Education";
import Languages from "./Resume Sections/Languages";
import { FaDownload, FaSave } from "react-icons/fa";
import { Column, Row } from "../../Utils/FormStyle";

const Preview = () => {
  return (
    <>
      <div className={style["container"]}>
        <div className={style["resume-preview-wrapper"]}>
          <div className={style["left-section"]}>
            <ProfilePhoto />
            <Contacts />
            <Skills />
            <Interest />
          </div>
          <div className={style["right-section"]}>
            <ProfileInfo />
            <About />
            <WorkExperience />
            <Education />
            <Languages />
          </div>
        </div>
      </div>
      <div className={style["resume-action"]}>
        <Column>
          <button className="secondary-button">
            <FaSave />
          </button>
          <button className="secondary-button">
            <FaDownload />
          </button>
        </Column>
      </div>
    </>
  );
};

export default Preview;
