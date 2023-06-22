import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { initialValueforProfileInfo } from "../../../Utils/ResumeForm";
import style from "./BasicInfo.module.css";
import InputField from "../../InputField/InputField";
import {
  AccordianForm,
  ButtonRight,
  Divider,
  Row,
} from "../../../Utils/FormStyle";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import FormHeader from "../FormHeader";
import noprofile from "../../../Assets/no-profile.png";
import { Toaster } from "react-hot-toast";
import { save } from "../../../Utils/Toster";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import { profile } from "../../../Store/ResumeFormSlices/profileSlice";
import { useParams } from "react-router";
import { curResumeActions } from "../../../Store/curResumeSlice";

const AddProfileInfo = () => {
  const [isexpand, setIsExpand] = useState(true);
  const [previewImage, setPreviewImage] = useState(noprofile);
  const resumeId = useParams().id;
  const resume = useAppSelector(
    (state) =>
      state.resume.resumeList.filter((resume) => resume.id == resumeId)[0]
  );
  const dispatch = useAppDispatch();

  // Handler to see preview Image
  const handlePreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
    }
  };

  // Handler to submit profile Details
  const submitHandler = (values: profile) => {
    dispatch(
      curResumeActions.addprofileInfo({ ...values, profilePhoto: previewImage })
    );
    save("Profile Info Added");
  };

  return (
    <div>
      {/* Profile Info section */}
      <FormHeader
        title="Profile Info"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          <Formik
            initialValues={
              resume?.resumeData.profileInfo || initialValueforProfileInfo
            }
            onSubmit={submitHandler}
          >
            {({ setFieldValue }) => (
              <Form>
                <div className={style["profile-upload-container"]}>
                  {/* profile photo section */}
                  <div className={style["profile-preview"]}>
                    <div className={style["profile-image"]}>
                      <img src={previewImage} alt="profile-image" />
                    </div>
                    <label htmlFor="profilePhoto">
                      <FaUserEdit />
                    </label>
                    <Field
                      id="profilePhoto"
                      name="profilePhoto"
                      value={undefined}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("profilePhoto", e.target.files?.[0]);
                        handlePreviewImage(e);
                      }}
                      type="file"
                      hidden
                    />
                    <MdDelete
                      onClick={() => {
                        setFieldValue("profilePhoto", undefined);
                        setPreviewImage(noprofile);
                      }}
                    />
                  </div>
                </div>
                <Row>
                  <InputField
                    id="firstname"
                    name="firstname"
                    label="FirstName"
                  />
                  <Divider />
                  <InputField id="lastname" name="lastname" label="LastName" />
                </Row>
                <InputField id="jobtitle" name="jobtitle" label="Job Title" />
                <InputField
                  id="short-bio"
                  name="about"
                  label="Short Bio"
                  varient="textarea"
                />
                <ButtonRight>
                  <button className="secondary-button" type="submit">
                    Save
                  </button>
                  <Toaster position="bottom-center" reverseOrder={false} />
                </ButtonRight>
              </Form>
            )}
          </Formik>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddProfileInfo;
