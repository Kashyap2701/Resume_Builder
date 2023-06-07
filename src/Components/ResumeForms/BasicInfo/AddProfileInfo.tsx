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

const AddProfileInfo = () => {
  const [isexpand, setIsExpand] = useState(true);
  const [profilePhoto, setProfilePhoto] = useState(noprofile);
  const [previewImage, setPreviewImage] = useState(noprofile);

  // Profile Preview Handler
  const handlePreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewImage(reader.result as string);
      };
      setProfilePhoto(file);
    }
  };

  const submitHandler = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <FormHeader
        title="Profile Info"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          <Formik
            initialValues={initialValueforProfileInfo}
            onSubmit={submitHandler}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className={style["profile-upload-container"]}>
                  <div className={style["profile-preview"]}>
                    <div className={style["profile-image"]}>
                      <img src={previewImage} alt="" />
                    </div>
                    <p>{profilePhoto.name}</p>
                  </div>
                  <div className={style["profile-actions"]}>
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
                    <MdDelete />
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
                  <button className="secondary-button">Save</button>
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
