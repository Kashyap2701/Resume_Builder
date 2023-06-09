import React from "react";
import style from "./Auth.module.css";
import InputField from "../../Components/InputField/InputField";
import signupImg from "../../Assets/signup-image.jpg";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { initialValuesForSignupForm } from "../../Utils/InitialValue";
import { validationSchemaForSignup } from "../../Utils/ValidationSchema";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../Service/firebase";
import { error, save } from "../../Utils/Toster";
import { Toaster } from "react-hot-toast";
import { FirebaseError } from "firebase/app";
import { signupFormData } from "../../Utils/Types";

const Signup = () => {
  const navigate = useNavigate();

  // Handler for signup user
  const submitHandler = async (values: signupFormData) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      save("User Successfully Registered");
      const user = response.user;
      await updateProfile(user, {
        displayName: values.fullName,
      });
      navigate("/login");
    } catch (e) {
      if (e instanceof FirebaseError) error(e.message);
    }
  };

  return (
    <div className={style.container}>
      <div className={style["signup-form-wrapper"]}>
        <div className={style["image-section"]}>
          <img src={signupImg} alt="signup-form-image" />
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
                Signup
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
