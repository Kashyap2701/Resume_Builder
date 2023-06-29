import React from "react";
import AddContactsForm from "./BasicInfo/AddContacts";
import AddProfileInfo from "./BasicInfo/AddProfileInfo";
import AddInterests from "./Skills&Languages/AddInterests";
import AddLanguages from "./Skills&Languages/AddLanguages";
import AddSkills from "./Skills&Languages/AddSkills";
import AddEducation from "./Work&Education/AddEducation";
import AddWork from "./Work&Education/AddWork";

const ResumeEditor = () => {
  return (
    <>
      <AddProfileInfo />
      <AddContactsForm />
      <AddWork />
      <AddEducation />
      <AddSkills />
      <AddLanguages />
      <AddInterests />
    </>
  );
};

export default ResumeEditor;
