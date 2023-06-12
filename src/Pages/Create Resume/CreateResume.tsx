import React from "react";
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

const CreateResume = () => {
  return (
    <div className={style["container"]}>
      <div className={style["resume-form"]}>
        <ActionBar />
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
        <Preview />
      </div>
    </div>
  );
};

export default CreateResume;
