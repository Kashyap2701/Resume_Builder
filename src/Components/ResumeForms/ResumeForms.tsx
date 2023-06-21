import React from "react";
import { useAppDispatch } from "../../Store/hooks";
import { contactActions } from "../../Store/ResumeFormSlices/contactSlice";
import { educationAction } from "../../Store/ResumeFormSlices/educationSlice";
import { interestActions } from "../../Store/ResumeFormSlices/interestSlice";
import { languageActions } from "../../Store/ResumeFormSlices/languageSlice";
import { profileActions } from "../../Store/ResumeFormSlices/profileSlice";
import { skillActions } from "../../Store/ResumeFormSlices/skillSlice";
import { workActions } from "../../Store/ResumeFormSlices/workSlice";
import { resume } from "../../Store/resumeSlice";
import AddContactsForm from "./BasicInfo/AddContacts";
import AddProfileInfo from "./BasicInfo/AddProfileInfo";
import AddInterests from "./Skills&Languages/AddInterests";
import AddLanguages from "./Skills&Languages/AddLanguages";
import AddSkills from "./Skills&Languages/AddSkills";
import AddEducation from "./Work&Education/AddEducation";
import AddWork from "./Work&Education/AddWork";

type resumeForm = {
  editMode: boolean;
  currentResume: resume;
};

const ResumeForms = ({ editMode, currentResume }: resumeForm) => {
  const dispatch = useAppDispatch();

  if (editMode) {
    dispatch(
      profileActions.addprofileInfo(currentResume.resumeData.profileInfo)
    );
    dispatch(contactActions.addContacts(currentResume.resumeData.contacts));
    dispatch(workActions.loadExperiences(currentResume.resumeData.experiences));
    dispatch(educationAction.loadEducation(currentResume.resumeData.education));
    dispatch(skillActions.loadSkill(currentResume.resumeData.skills));
    dispatch(languageActions.loadLanguage(currentResume.resumeData.languages));
    dispatch(interestActions.loadInterest(currentResume.resumeData.interests));
  } else {
    dispatch(profileActions.resetState());
    dispatch(contactActions.resetState());
    dispatch(workActions.resetState());
    dispatch(educationAction.resetState());
    dispatch(skillActions.resetState());
    dispatch(languageActions.resetState());
    dispatch(interestActions.resetState());
  }

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

export default ResumeForms;
