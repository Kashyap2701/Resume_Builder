import React from "react";
import { useState } from "react";
import { Formik, Form } from "formik";
import FormHeader from "./FormHeader";
import { Column, Divider, Input, Row } from "../../Utils/FormStyle";
import InputField from "../InputField/InputField";

const AddSkills = () => {
  const [isexpand, setIsExpand] = useState(false);
  const [skills, setSkills] = useState([]);

  const onEnterKey = (e: KeyboardEvent) => {
    // if (e.key == "ENTER") {
    //     setSkills([...skills,e.target.value])
    // }
  };

  return (
    <div>
      <FormHeader
        title="Skills"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <div>
          <Input
            type="text"
            placeholder="Type Your Skill Here"
            // onKeyDown={(e) => onEnterKey(e)}
          />
          <div></div>
        </div>
      )}
    </div>
  );
};

export default AddSkills;
