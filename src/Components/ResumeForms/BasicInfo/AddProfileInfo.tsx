import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { initialValueforProfileInfo } from "../../../Utils/ResumeForm";
import style from "./BasicInfo.module.css";
import InputField from "../../InputField/InputField";
import { AccordianForm, Divider, Row } from "../../../Utils/FormStyle";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import FormHeader from "../FormHeader";
import noprofile from "../../../Assets/no-profile.png";

const AddProfileInfo = () => {
  const [isexpand, setIsExpand] = useState(false);
  // const [previewImage, setPreviewImage] = useState<string>();

  // const handlePreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   let reader = new FileReader();
  //   reader.addEventListener("load", (e) => {
  //     setPreviewImage(e.target.result);
  //   });
  //   reader.readAsDataURL(e.target.files[0]);
  // };

  const submitHandler = () => {
    // console.log(values);
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
                      <img src={noprofile} alt="" />
                    </div>
                    <p>File Name.png</p>
                  </div>
                  <div className={style["profile-actions"]}>
                    <label htmlFor="profilePhoto">
                      <FaUserEdit />
                    </label>
                    <Field
                      id="profilePhoto"
                      name="profilePhoto"
                      value={undefined}
                      onChange={(e: any) => {
                        // setFieldValue("profilePhoto", e.target.files[0]);
                        // handlePreviewImage(e);
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
              </Form>
            )}
          </Formik>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddProfileInfo;
