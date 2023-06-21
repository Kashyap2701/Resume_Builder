import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, { ChangeEvent, useState } from "react";
import { FaDownload, FaSave } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import uuid from "react-uuid";
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
  const [title, setTitle] = useState(
    props.title || `Resume Title ${(Math.random() * 100).toFixed(0)}`
  );
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

  // Handler for title input change
  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // Handler for saving new resume
  const saveresumeHandler = async () => {
    const resumeCollectionRef = collection(db, "resume");
    const newResume: resume = {
      id: uuid(),
      resume_title: title,
      userId: id,
      resumeData: {
        profileInfo,
        contacts,
        experiences,
        education,
        skills,
        interests,
        languages,
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

  // Handler for updating an existing resume
  const updateresumeHandler = async () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const resumeRef = doc(db, "resume", resume_id!);
    const newResume = {
      resume_title: title,
      resumeData: {
        profileInfo,
        contacts,
        experiences,
        education,
        skills,
        interests,
        languages,
      },
    };
    try {
      const response = await updateDoc(resumeRef, newResume);
      save("Resume Saved");
      console.log(response);
      navigate("/my-resumes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style["container"]}>
      <div className={style["resume-title"]}>
        {/* Input field for the resume title */}
        <Input
          placeholder="Ex. Resume For Amazon"
          value={title}
          onChange={onchangeHandler}
        />
      </div>
      <div className={style["resume-actions"]}>
        {resume_id !== undefined ? (
          // Button for updating an existing resume
          <button onClick={updateresumeHandler}>
            <span>
              <FaSave /> Update
            </span>
          </button>
        ) : (
          // Button for saving a new resume
          <button onClick={saveresumeHandler}>
            <span>
              <FaSave /> Save
            </span>
          </button>
        )}
        {/* Button for downloading the resume */}
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
