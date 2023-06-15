import { addDoc, collection } from "firebase/firestore";
import React, { ChangeEvent, useState } from "react";
import { FaDownload, FaSave } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";

import { db } from "../../Service/firebase";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { resume, resumeActions } from "../../Store/resumeSlice";
import { Input } from "../../Utils/FormStyle";
import { save } from "../../Utils/Toster";
import style from "./Actionbar.module.css";

type ActionBarProps = {
  downloadresumeHandler: () => void;
  title: string | undefined;
};

const ActionBar = (props: ActionBarProps) => {
  const [title, setTitle] = useState("");
  const id = useAppSelector((state) => state.user.id);
  const resume_id = useParams().id;
  const profileInfo = useAppSelector((state) => state.profile.profileInfo);
  const contacts = useAppSelector((state) => state.contact.contacts);
  const interests = useAppSelector((state) => state.interest.interests);
  const languages = useAppSelector((state) => state.language.languages);
  const skills = useAppSelector((state) => state.skill.skills);
  const experiences = useAppSelector((state) => state.work.experiences);
  const education = useAppSelector((state) => state.education.educations);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const saveresumeHandler = async () => {
    const resumeCollectionRef = collection(db, "resume");
    const newResume: resume = {
      id: resume_id as string,
      resume_title: title,
      userId: id,
      resumeData: {
        profileInfo: profileInfo,
        contacts: contacts,
        experiences: experiences,
        education: education,
        skills: skills,
        interests: interests,
        languages: languages,
      },
    };
    try {
      const response = await addDoc(resumeCollectionRef, newResume);
      save("Resume Saved");
      console.log(response);
      dispatch(resumeActions.addResume(newResume));
      navigate("/my-resumes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style["container"]}>
      <div className={style["resume-title"]}>
        <Input
          placeholder="Ex. Resume For Amazon"
          value={resume_id !== undefined ? props.title : title}
          onChange={onchangeHandler}
        />
      </div>
      <div className={style["resume-actions"]}>
        <button onClick={saveresumeHandler}>
          <span>
            <FaSave /> {resume_id !== undefined ? "Update" : "Save"}
          </span>
        </button>
        <button onClick={props.downloadresumeHandler}>
          <span>
            <FaDownload /> Download
          </span>
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
