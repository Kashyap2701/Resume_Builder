import React from "react";
import style from "./Auth.module.css";
import InputField from "../../Components/InputField/InputField";
import signupImg from "../../Assets/signup-image.jpg";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import {
  initialValuesForSignupForm,
  validationSchemaForSignup,
} from "./AuthFormUtil";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Service/firebase";
import { error, save } from "../../Utils/Toster";
import { Toaster } from "react-hot-toast";
import { FirebaseError } from "firebase/app";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Signup = () => {
  const navigate = useNavigate();

  const submitHandler = async (values: FormData) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = response.user;
      await updateProfile(user, {
        displayName: values.fullName,
      });
      console.log(user);
      save("User Successfully Registered");
      navigate("/login");
    } catch (e) {
      if (e instanceof FirebaseError) error(e.message);
    }
  };

  return (
    <div className={style.container}>
      <div className={style["signup-form-wrapper"]}>
        <div className={style["image-section"]}>
          <img src={signupImg} alt="" />
        </div>
        <div className={style["form-section"]}>
          <div className={style["form-header"]}>
            <h2>Signup</h2>
            <p>Create your account now</p>
          </div>
          <Formik
            initialValues={initialValuesForSignupForm}
            validationSchema={validationSchemaForSignup}
            onSubmit={submitHandler}
          >
            <Form>
              <InputField
                id="fullname"
                name="fullName"
                label="Full Name"
                type="text"
              />
              <InputField id="email" name="email" label="Email" type="email" />
              <InputField
                id="password"
                name="password"
                label="Password"
                type="password"
              />
              <InputField
                id="confirm-password"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
              />
              <button className="primary-button" type="submit">
                Singup
              </button>
              <Toaster position="bottom-center" reverseOrder={false} />
            </Form>
          </Formik>
          <div className={style["form-footer"]}>
            <p>
              Have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
