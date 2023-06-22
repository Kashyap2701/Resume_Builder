import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import React, {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { FaDownload, FaEye, FaSave } from "react-icons/fa";
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
  openModal: () => void;
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
    return window.removeEventListener("resize", () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);

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
    const updatedResume = {
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
      const response = await updateDoc(resumeRef, updatedResume);
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
        {screenWidth <= 1024 && (
          <button onClick={() => props.openModal()}>
            <span>
              <FaEye /> <span>Preview</span>
            </span>
          </button>
        )}
        {resume_id !== undefined ? (
          // Button for updating an existing resume
          <button onClick={updateresumeHandler}>
            <span>
              <FaSave /> <span>Update</span>
            </span>
          </button>
        ) : (
          // Button for saving a new resume
          <button onClick={saveresumeHandler}>
            <span>
              <FaSave /> <span>Save</span>
            </span>
          </button>
        )}
        {/* Button for downloading the resume */}
        <button onClick={props.downloadresumeHandler}>
          <span>
            <FaDownload /> <span>Download</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ActionBar;
