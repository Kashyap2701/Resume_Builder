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
import { Column } from "../../Utils/FormStyle";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import uuid from "react-uuid";
import { resumeActions, resumeData } from "../../Store/resumeSlice";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

const Preview = () => {
  const profileInfo = useAppSelector((state) => state.profile.profileInfo);
  const contacts = useAppSelector((state) => state.contact.contacts);
  const interests = useAppSelector((state) => state.interest.interests);
  const languages = useAppSelector((state) => state.language.languages);
  const skills = useAppSelector((state) => state.skill.skills);
  const experiences = useAppSelector((state) => state.work.experiences);
  const education = useAppSelector((state) => state.education.educations);

  const dispatch = useAppDispatch();
  const resumeRef = useRef(null);

  const saveresumeHandler = () => {
    const newResume: resumeData = {
      id: uuid(),
      profileInfo: profileInfo,
      contacts: contacts,
      experiences: experiences,
      education: education,
      skills: skills,
      interests: interests,
      languages: languages,
    };

    dispatch(resumeActions.addResume(newResume));
  };

  const downloadresumeHandler = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <>
      <div className={style["container"]}>
        <div
          id="resume"
          className={style["resume-preview-wrapper"]}
          ref={resumeRef}
        >
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
          <button className="secondary-button" onClick={saveresumeHandler}>
            <FaSave />
          </button>
          <button className="secondary-button" onClick={downloadresumeHandler}>
            <FaDownload />
          </button>
        </Column>
      </div>
    </>
  );
};

export default Preview;
