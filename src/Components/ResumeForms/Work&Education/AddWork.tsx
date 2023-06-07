import React from "react";
import FormHeader from "../FormHeader";
import { useState } from "react";
import { Formik, Form, FormikHelpers, FormikConfig } from "formik";
import style from "./Style.module.css";
import {
  Row,
  Column,
  Divider,
  ButtonRight,
  AccordianForm,
} from "../../../Utils/FormStyle";
import { RxCross2 } from "react-icons/rx";
import InputField from "../../InputField/InputField";
import { initialValueforWorkInfo } from "../../../Utils/ResumeForm";
import uuid from "react-uuid";

type experience = {
  id: string;
  title: string;
  startedYear: string | number;
  endedYear: string | number;
  jobTitle: string;
  companyName: string;
  desc: string;
};

const dummyExperiences: experience[] = [
  {
    id: uuid(),
    title: "Experience 1",
    startedYear: 2015,
    endedYear: 2017,
    jobTitle: "Software Engineer",
    companyName: "Simform Solution",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, voluptas.",
  },
  {
    id: uuid(),
    title: "Experience 2",
    startedYear: 2017,
    endedYear: 2018,
    jobTitle: "Software Engineer",
    companyName: "Simform Solution",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, voluptas.",
  },
];

const AddWork = () => {
  const [isexpand, setIsExpand] = useState(false);
  const [experirences, setExperiences] = useState(dummyExperiences);
  const [selectedExperience, setSelectedExperience] =
    useState<experience | null>(null);

  // when save button is clicked
  const submitHandler: FormikConfig<experience>["onSubmit"] = (
    values: experience,
    { resetForm }: FormikHelpers<experience>
  ) => {
    setExperiences([...experirences, values]);
    resetForm();
  };

  const editExperienceHandler = (e) => {
    const id = e.target.id;
    setSelectedExperience(experirences.filter((data) => data.id == id)[0]);
  };

  // delete single experience
  const deleteHandler = (e) => {
    const id = e.target.parentNode.id;
    const newExperiences = experirences.filter((data) => data.id != id);
    setExperiences(newExperiences);
  };

  return (
    <div>
      <FormHeader
        title="Work Experience"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {console.log(selectedExperience)}
      {isexpand && (
        <AccordianForm>
          {/* all the experiences that are added */}
          <div className={style["container"]}>
            {experirences.map((data) => {
              return (
                <>
                  <div
                    key={data.id}
                    id={data.id}
                    className={style["item"]}
                    onClick={editExperienceHandler}
                  >
                    <span>{data.title}</span>
                    <RxCross2 onClick={deleteHandler} />
                  </div>
                </>
              );
            })}
          </div>
          <Formik
            initialValues={selectedExperience || initialValueforWorkInfo}
            onSubmit={submitHandler}
            enableReinitialize
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
                    name="companyName"
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
