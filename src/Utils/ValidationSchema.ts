import * as Yup from "yup";

// export const validationSchemaForSignup = Yup.object().shape({
//     fullName: Yup.string().required("Required!"),
//     email: Yup.string().email("Invalid").required("Required!"),
//     password: Yup.string().required("Required!"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), undefined], "Password don't match!")
//       .required("Required!"),
//   });

export const validationschemaforWork = Yup.object().shape({
  title: Yup.string().required("Required!"),
});

export const validationschemaforEducation = Yup.object().shape({
  title: Yup.string().required("Required!"),
});

export const validationschemaforUser = Yup.object().shape({
  email: Yup.string().email("Invalid").required("Required!"),
  password: Yup.string().required("Required!"),
});
