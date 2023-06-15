import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import styles from "./EditProfile.module.css";
import InputField from "../../Components/InputField/InputField";
import Avatar from "../../Components/Avatar";
import { Column } from "../../Utils/FormStyle";
import { user, userActions } from "../../Store/userSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { error, save } from "../../Utils/Toster";
import { Toaster } from "react-hot-toast";
import { validationschemaforUser } from "../../Utils/ValidationSchema";
import Navbar from "../../Components/Navbar/Navbar";
import { auth, uploadPhoto } from "../../Service/firebase";
import { updateProfile } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const EditProfile = () => {
  const currentUser = useAppSelector((state) => state.user.user);
  console.log(currentUser);

  const [previewImage, setPreviewImage] = useState(currentUser?.profilePhoto);
  const [isPhotoUpdated, setPhotoUpdate] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const user = auth.currentUser;
    console.log(user);
  }, []);

  const initialValues: user = currentUser || {
    fullname: "",
    email: "",
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

  const profileUpdateHandler = async (values: user) => {
    const curUser = auth.currentUser;
    try {
      if (isPhotoUpdated) {
        console.log(isPhotoUpdated);
        const imageURL = await uploadPhoto(values.profilePhoto);
        await updateProfile(curUser, {
          email: values.email,
          displayName: values.fullname,
          photoURL: imageURL,
        });
        dispatch(
          userActions.editUser({
            ...values,
            profilePhoto: imageURL,
          })
        );
      } else {
        await updateProfile(curUser, {
          email: values.email,
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
  };

  return (
    <>
      <Navbar />
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
                  <Avatar
                    size="3rem"
                    src={previewImage as string}
                    classname={styles.profilephoto}
                  />
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
                <InputField id="email" name="email" label="Email" />
                <button className="primary-button" type="submit">
                  Update
                </button>
                <Toaster position="bottom-center" reverseOrder={false} />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
