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
import {
  profile,
  profileActions,
} from "../../../Store/ResumeFormSlices/profileSlice";

const AddProfileInfo = () => {
  const [isexpand, setIsExpand] = useState(true);
  const [previewImage, setPreviewImage] = useState(noprofile);
  const profileInfo = useAppSelector((state) => state.profile.profileInfo);
  const dispatch = useAppDispatch();

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

  const submitHandler = (values: profile) => {
    dispatch(
      profileActions.addprofileInfo({ ...values, profilePhoto: previewImage })
    );
    save("Profile Info Added");
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
            {({ setFieldValue }) => (
              <Form>
                <div className={style["profile-upload-container"]}>
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
