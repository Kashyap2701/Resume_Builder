import * as Yup from "yup";

export const initialValuesForLoginForm = {
  email: "",
  password: "",
};

export const initialValuesForSignupForm = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const validationSchemaForSignup = Yup.object().shape({
  fullName: Yup.string().required("Required!"),
  email: Yup.string().email("Invalid").required("Required!"),
  password: Yup.string().required("Required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Password don't match!")
    .required("Required!"),
});

export const validationSchemaForLogin = Yup.object().shape({
  email: Yup.string().email("Invalid").required("Required!"),
  password: Yup.string().required("Required!"),
});
