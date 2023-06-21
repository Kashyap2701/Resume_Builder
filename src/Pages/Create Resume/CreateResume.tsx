import React, { useRef } from "react";
import style from "./CreateResume.module.css";
import Preview from "../../Components/Resume Privew/Preview";
import ActionBar from "../../Components/Resume Action/ActionBar";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router";
import { useAppSelector } from "../../Store/hooks";
import ResumeForms from "../../Components/ResumeForms/ResumeForms";

const CreateResume = () => {
  const resumeRef = useRef(null);
  const resumeId = useParams().id as string;
  const iseditMode = resumeId ? true : false;
  const resume = useAppSelector(
    (state) =>
      state.resume.resumeList.filter((resume) => resume.id == resumeId)[0]
  );
  console.log(resume);

  const downloadresumeHandler = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div className={style["container"]}>
      <ActionBar
        downloadresumeHandler={downloadresumeHandler}
        title={resume ? resume.resume_title : ""}
      />
      <div className={style["resume-container"]}>
        <div className={style["resume-form"]}>
          <div className={style["form-section"]}>
            <ResumeForms editMode={iseditMode} currentResume={resume} />
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
