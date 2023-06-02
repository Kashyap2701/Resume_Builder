import React, { useState } from "react";
import { Formik, Form } from "formik";
import { initialValueforProfileInfo } from "../../Utils/ResumeForm";
import InputField from "../InputField/InputField";
import { Divider, Row } from "../../Utils/FormStyle";
// import { FaUserEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
import FormHeader from "./FormHeader";

const AddProfileInfo = () => {
  const [isexpand, setIsExpand] = useState(false);

  const submitHandler = () => {
    // console.log(values);
  };

  return (
    <div>
      <FormHeader
        title="Profile Info"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <Formik
          initialValues={initialValueforProfileInfo}
          onSubmit={submitHandler}
        >
          <Form>
            {/* <div>
              <div>
                <div>
                  <img src="" alt="" />
                </div>
                <p>filename</p>
              </div>
              <div>
                <FaUserEdit />
                <MdDelete />
              </div>
            </div> */}
            <Row>
              <InputField id="firstname" name="firstname" label="FirstName" />
              <Divider />
              <InputField id="lastname" name="lastname" label="LastName" />
            </Row>
            <InputField id="jobtitle" name="jobtitle" label="Job Title" />
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default AddProfileInfo;
