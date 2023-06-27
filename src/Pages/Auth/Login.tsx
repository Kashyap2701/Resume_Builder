import React from "react";
import style from "./Auth.module.css";
import loginImage from "../../Assets/login-image.jpg";
import InputField from "../../Components/InputField/InputField";
import { Form, Formik } from "formik";
import { initialValuesForLoginForm } from "../../Utils/InitialValue";
import { validationSchemaForLogin } from "../../Utils/ValidationSchema";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Service/firebase";
import { useAppDispatch } from "../../Store/hooks";
import { userActions } from "../../Store/userSlice";
import { error } from "../../Utils/Toster";
import { Toaster } from "react-hot-toast";
import { FirebaseError } from "firebase/app";
import { loginFormData } from "../../Utils/Types";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Handler to login user 
  const submitHandler = async (values: loginFormData) => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const currentUser = {
        fullname: response.user.displayName,
        email: response.user.email,
        profilePhoto: response.user.photoURL,
      };
      dispatch(
        userActions.loggedIn({ id: response.user.uid, user: currentUser })
      );
      navigate("/");
    } catch (e) {
      if (e instanceof FirebaseError) error(e.message);
    }
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
              <Toaster position="bottom-center" reverseOrder={false} />
            </Form>
          </Formik>
          <div className={style["form-footer"]}>
            <p>
              Don't have Account? <Link to="/signup">Signup</Link>
            </p>
          </div>
        </div>
        <div className={style["image-section"]}>
          <img src={loginImage} alt="login-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
