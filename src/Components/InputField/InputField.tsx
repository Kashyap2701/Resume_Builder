import style from "./InputField.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Field, ErrorMessage } from "formik";

type InputFieldProps = {
  id: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  varient?: string;
  readOnly?: boolean;
};

const InputField = (props: InputFieldProps) => {
  const [isVisible, setIsVisble] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  // Handler for toggle password visible or invisible
  const togglePassword = () => {
    setIsVisble(!isVisible);
    !isVisible ? setPasswordType("text") : setPasswordType("password");
  };

  // Input type password
  const PasswordField = () => {
    return (
      <div className={style["password-field"]}>
        <Field
          id={props.id}
          name={props.id}
          type={passwordType}
          placeholder={props.placeholder}
        />
        {isVisible ? (
          <FaEyeSlash onClick={togglePassword} />
        ) : (
          <FaEye onClick={togglePassword} />
        )}
      </div>
    );
  };

  return (
    <div className={style["form-field"]}>
      <div>
        {/* Label for input */}
        {props.label && <label htmlFor={props.id}>{props.label}</label>}
        {/* Error message for input */}
        <ErrorMessage
          className={style["error-message"]}
          name={props.name}
          component="p"
        />
      </div>
      {/* Input field */}
      {props.id === "password" ? (
        PasswordField()
      ) : (
        <Field
          id={props.id}
          name={props.name}
          type={props.type || "text"}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          as={props.varient}
          rows={props.varient == "textarea" ? 4 : null}
        />
      )}
    </div>
  );
};

export default InputField;
