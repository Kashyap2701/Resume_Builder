import React from "react";
import style from "./Auth.module.css";
import loginImage from "../../Assets/login-image.jpg";
import InputField from "../../Components/InputField/InputField";
import { Form, Formik } from "formik";
import {
  initialValuesForLoginForm,
  validationSchemaForLogin,
} from "./AuthFormUtil";
import { Link } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const submitHandler = (values: FormData) => {
    console.log(values);
  };

  return (
    <div className={style.container}>
      <div className={style["login-form-wrapper"]}>
        <div className={style["form-section"]}>
          <div className={style["form-header"]}>
            <h2>Login</h2>
            <p>Let's make Resume!</p>
          </div>
          <Formik
            initialValues={initialValuesForLoginForm}
            validationSchema={validationSchemaForLogin}
            onSubmit={submitHandler}
          >
            <Form>
              <InputField id="email" name="email" label="Email" type="text" />
              <InputField
                id="password"
                name="password"
                label="Password"
                type="password"
              />
              <button className="primary-button" type="submit">
                Login
              </button>
            </Form>
          </Formik>
          <div className={style["form-footer"]}>
            <p>
              Don't have Account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
        <div className={style["image-section"]}>
          <img src={loginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
