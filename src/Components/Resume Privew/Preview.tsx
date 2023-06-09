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
import { useAppSelector } from "../../Store/hooks";
import uuid from "react-uuid";

const Preview = () => {
  const profileInfo = useAppSelector((state) => state.profile.profileInfo);
  const contacts = useAppSelector((state) => state.contact.contacts);
  const interests = useAppSelector((state) => state.interest.interests);
  const languages = useAppSelector((state) => state.language.languages);
  const skills = useAppSelector((state) => state.skill.skills);
  const experiences = useAppSelector((state) => state.work.experiences);
  const education = useAppSelector((state) => state.education.educations);

  const saveresumeHandler = () => {
    const resume = {
      id: uuid(),
      ...profileInfo,
      ...contacts,
      ...interests,
      ...languages,
      ...skills,
      ...education,
      ...experiences,
    };

    console.log(resume);
  };

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
            <FaSave onClick={saveresumeHandler} />
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
