import React from "react";
import style from "./Auth.module.css";
import InputField from "../../Components/InputField/InputField";
import signupImg from "../../Assets/signup-image.jpg";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import {
  initialValuesForSignupForm,
  validationSchemaForSignup,
} from "./AuthFormUtil";

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Signup = () => {
  const submitHandler = (values: FormData) => {
    console.log(values);
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
