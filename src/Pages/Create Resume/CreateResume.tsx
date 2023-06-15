import React, { useEffect, useRef, useState } from "react";
import AddContactsForm from "../../Components/ResumeForms/BasicInfo/AddContacts";
import AddEducation from "../../Components/ResumeForms/Work&Education/AddEducation";
import AddLanguages from "../../Components/ResumeForms/Skills&Languages/AddLanguages";
import AddProfileInfo from "../../Components/ResumeForms/BasicInfo/AddProfileInfo";
import AddSkills from "../../Components/ResumeForms/Skills&Languages/AddSkills";
import AddWork from "../../Components/ResumeForms/Work&Education/AddWork";
import style from "./CreateResume.module.css";
import Preview from "../../Components/Resume Privew/Preview";
import AddInterests from "../../Components/ResumeForms/Skills&Languages/AddInterests";
import ActionBar from "../../Components/Resume Action/ActionBar";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Service/firebase";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { resume, resumeActions } from "../../Store/resumeSlice";

const CreateResume = () => {
  const resumeRef = useRef(null);
  const resumeId = useParams().id as string;
  const resumeList = useAppSelector((state) => state.resume.resumeList);
  const [resume, setResume] = useState<resume>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // const getResume = async (id: string) => {
    //   // const resumeCollectionRef = collection();
    //   const response = await getDoc(doc(db, "resume", id));
    //   const resume = response.data() as resume;
    //   dispatch(resumeActions.addResume(resume));
    //   console.log(response.data());
    // };
    // getResume(resumeId);
    const cuurentResume = resumeList.filter(
      (resume) => resume.id == resumeId
    )[0];
    setResume(cuurentResume);
    console.log(cuurentResume);
  }, []);

  const downloadresumeHandler = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div className={style["container"]}>
      <ActionBar
        downloadresumeHandler={downloadresumeHandler}
        title={resume?.resume_title}
      />
      <div className={style["resume-container"]}>
        <div className={style["resume-form"]}>
          <div className={style["form-section"]}>
            <AddProfileInfo />
            <AddContactsForm />
            <AddWork />
            <AddEducation />
            <AddSkills />
            <AddLanguages />
            <AddInterests />
          </div>
        </div>
        <div className={style["resume-preview"]}>
          <Preview ref={resumeRef} />
        </div>
      </div>
    </div>
  );
};

export default CreateResume;
