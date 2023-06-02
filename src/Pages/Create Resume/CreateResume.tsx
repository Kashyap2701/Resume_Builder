import React from "react";
import AddContactsForm from "../../Components/ResumeForms/AddContacts";
import AddProfileInfo from "../../Components/ResumeForms/AddProfileInfo";
import AddSkills from "../../Components/ResumeForms/AddSkills";
import style from "./CreateResume.module.css";

// import { Formik, Form } from "formik";

const CreateResume = () => {
  return (
    <div className={style["container"]}>
      <div className={style["resume-form"]}>
        <div className={style["form-section"]}>
          <AddProfileInfo />
          <hr />
          <AddContactsForm />
          <hr />
          <AddSkills />
          <hr />
        </div>
      </div>
      <div className={style["resume-preview"]}>sdfsdf</div>
    </div>
  );
};

export default CreateResume;
