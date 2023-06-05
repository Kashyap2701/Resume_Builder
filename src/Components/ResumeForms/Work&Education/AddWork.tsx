import React from "react";
import FormHeader from "../FormHeader";
import { useState } from "react";
import { Formik, Form } from "formik";
import style from "./Style.module.css";
import {
  Row,
  Column,
  Divider,
  ButtonRight,
  AccordianForm,
} from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import { GrFormAdd } from "react-icons/gr";
import InputField from "../../InputField/InputField";
import { initialValueforWorkInfo } from "../../../Utils/ResumeForm";

const AddWork = () => {
  const [isexpand, setIsExpand] = useState(false);

  const submitHandler = () => {
    // console.log(values);
  };
  return (
    <div>
      <FormHeader
        title="Work Experience"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          <div className={style["container"]}>
            <div className={style["item"]}>
              <span>Experience 1</span>
              <RxCross2 />
            </div>
            <div className={style["item"]}>
              <span>Experience 2</span>
              <RxCross2 />
            </div>
            <div className={style["new-item"]}>
              <GrFormAdd />
              <span>New</span>
            </div>
          </div>
          <Formik
            initialValues={initialValueforWorkInfo}
            onSubmit={submitHandler}
          >
            <Form>
              <Column>
                <InputField
                  id="title"
                  name="title"
                  label="Title"
                  placeholder="ex. Work Experince 1"
                />
                <Row>
                  <InputField id="jobTitle" name="jobTitle" label="Job Title" />
                  <Divider />
                  <InputField
                    id="company name"
                    name="company name"
                    label="Company Name"
                  />
                </Row>
                <Row>
                  <InputField
                    id="start-date"
                    name="startedYear"
                    label="Start Year"
                  />
                  <Divider />
                  <InputField id="end-year" name="endedYear" label="End Year" />
                </Row>
                <InputField
                  id="desc"
                  name="desc"
                  label="Description"
                  varient="textarea"
                />
              </Column>
              <ButtonRight>
                <button className="secondary-button">Save</button>
              </ButtonRight>
            </Form>
          </Formik>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddWork;
