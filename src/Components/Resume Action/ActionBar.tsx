import React from "react";
import { FaDownload, FaSave } from "react-icons/fa";
import uuid from "react-uuid";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { resumeActions, resumeData } from "../../Store/resumeSlice";
import { Input } from "../../Utils/FormStyle";
import { save } from "../../Utils/Toster";
import style from "./Actionbar.module.css";

const ActionBar = () => {
  const profileInfo = useAppSelector((state) => state.profile.profileInfo);
  const contacts = useAppSelector((state) => state.contact.contacts);
  const interests = useAppSelector((state) => state.interest.interests);
  const languages = useAppSelector((state) => state.language.languages);
  const skills = useAppSelector((state) => state.skill.skills);
  const experiences = useAppSelector((state) => state.work.experiences);
  const education = useAppSelector((state) => state.education.educations);
  const dispatch = useAppDispatch();

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
    save("Resume Saved");
  };
  return (
    <div className={style["container"]}>
      <div className={style["resume-title"]}>
        <Input placeholder="Ex. Resume For Amazon" />
      </div>
      <div className={style["resume-actions"]}>
        <button onClick={saveresumeHandler}>
          <span>
            <FaSave /> Save
          </span>
        </button>
        <button>
          <span>
            <FaDownload /> Download
          </span>
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
