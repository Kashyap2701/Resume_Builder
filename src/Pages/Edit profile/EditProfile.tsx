/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./EditProfile.module.css";
import InputField from "../../Components/InputField/InputField";
import Avatar from "../../Components/Avatar";
import { Column } from "../../Utils/FormStyle";
import { user, userActions } from "../../Store/userSlice";
import { useAppDispatch } from "../../Store/hooks";
import { error, save } from "../../Utils/Toster";
import { Toaster } from "react-hot-toast";
import { validationschemaforUser } from "../../Utils/ValidationSchema";
import Navbar from "../../Components/Navbar/Navbar";
import { auth, uploadPhoto } from "../../Service/firebase";
import { updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import noprofile from "../../Assets/no-profile.png";
import LoadingDots from "../../Components/LoadingDots";

const EditProfile = () => {
  const currentUser: user = JSON.parse(localStorage.getItem("user")!);
  const [previewImage, setPreviewImage] = useState(
    currentUser?.profilePhoto || noprofile
  );
  const [isPhotoUpdated, setPhotoUpdate] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const initialValues: user = currentUser || {
    fullname: "",
    email: "",
    profilePhoto: "",
  };

  // Handler for preview image
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

  // Handler to update profile details
  const profileUpdateHandler = async (values: user) => {
    setLoading(true);
    const curUser = auth.currentUser!;
    try {
      // if new profilephoto is selected
      if (isPhotoUpdated) {
        console.log(isPhotoUpdated);
        const imageURL = await uploadPhoto(values.profilePhoto as Blob)!;
        await updateProfile(curUser, {
          displayName: values.fullname,
          photoURL: imageURL,
        });
        dispatch(
          userActions.editUser({
            ...values,
            profilePhoto: imageURL,
          })
        );
      }
      // if profilephoto is not selected only email & name is changed
      else {
        await updateProfile(curUser, {
          displayName: values.fullname,
        });
        dispatch(userActions.editUser(values));
      }
      save("User Updated");
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
        error(e.message);
      }
    }
    setLoading(false);
  };

  return (  
    <>
      <Navbar />
      {!isLoading ? (
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <h2>Edit Profile</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationschemaforUser}
              onSubmit={profileUpdateHandler}
            >
              {({ setFieldValue }) => (
                <Form>
                  <Column className={styles.profile}>
                    {/* preview photo that uploaded */}
                    <Avatar
                      size="3rem"
                      src={previewImage as string}
                      classname={styles.profilephoto}
                    />
                    {/* Input for upload profile photo */}
                    <Field
                      id="profilePhoto"
                      name="profilePhoto"
                      value={undefined}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPhotoUpdate(true);
                        setFieldValue("profilePhoto", e.target.files?.[0]);
                        handlePreviewImage(e);
                      }}
                      type="file"
                    />
                  </Column>
                  <InputField id="fullname" name="fullname" label="Full Name" />
                  <InputField
                    id="email"
                    name="email"
                    label="Email"
                    readOnly={true}
                  />
                  {/* Button for update profile */}
                  <button className="primary-button" type="submit">
                    Update
                  </button>
                  <Toaster position="bottom-center" reverseOrder={false} />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      ) : (
        <LoadingDots />
      )}
    </>
  );
};

export default EditProfile;
