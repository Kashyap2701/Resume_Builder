import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./EditProfile.module.css";
import InputField from "../../Components/InputField/InputField";
import Avatar from "../../Components/Avatar";
import { Column, Divider, Row } from "../../Utils/FormStyle";
import noprofile from "../../Assets/no-profile.png";

type EditProfile = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  profilePhoto: string;
};

const EditProfile = () => {
  const [previewImage, setPreviewImage] = useState(noprofile);
  const initialValues: EditProfile = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    profilePhoto: "",
  };
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

  const handleSubmit = (values: EditProfile) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <h2>Edit Profile</h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ setFieldValue }) => (
            <Form>
              <Row className={styles.profile}>
                <Avatar
                  size="3rem"
                  src={previewImage}
                  classname={styles.profilephoto}
                />
                <Field
                  id="profilePhoto"
                  name="profilePhoto"
                  value={undefined}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFieldValue("profilePhoto", e.target.files?.[0]);
                    handlePreviewImage(e);
                  }}
                  type="file"
                />
              </Row>
              <Row>
                <InputField id="firstname" name="firstname" label="Firstname" />
                <Divider />
                <InputField id="lastname" name="lastname" label="Lastname" />
              </Row>
              <InputField id="email" name="email" label="Email" />
              <InputField
                id="password"
                name="password"
                label="Password"
                type="password"
              />

              <button className="primary-button" type="submit">
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditProfile;
