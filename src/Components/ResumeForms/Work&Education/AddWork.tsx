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
import { GrFormAdd } from "react-icons/gr";
import InputField from "../../InputField/InputField";
import { initialValueforWorkInfo } from "../../../Utils/ResumeForm";
import uuid from "react-uuid";
import { save } from "../../../Utils/Toster";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import { experience } from "../../../Store/ResumeFormSlices/workSlice";
import { validationschemaforWork } from "../../../Utils/ValidationSchema";
import { curResumeActions } from "../../../Store/curResumeSlice";

const AddWork = () => {
  const experiences = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.experiences
  );
  const dispatch = useAppDispatch();
  const [isexpand, setIsExpand] = useState(false);
  const [buttonText, setButtonText] = useState("Save");
  const [selectedExperience, setSelectedExperience] = useState<experience>(
    initialValueforWorkInfo
  );

  // add or edit experience
  const submitHandler: FormikConfig<experience>["onSubmit"] = (
    values: experience,
    { resetForm }: FormikHelpers<experience>
  ) => {
    if (buttonText == "Save") {
      dispatch(curResumeActions.addExperience({ ...values, id: uuid() }));
      save("Experience Added");
    } else {
      dispatch(curResumeActions.updateExperience(values));
      save("Experience Updated");
      setSelectedExperience(initialValueforWorkInfo);
      setButtonText("Save");
    }
    resetForm();
  };

  // create new experience
  const newExperienceHandler = () => {
    setButtonText("Save");
    setSelectedExperience(initialValueforWorkInfo);
  };

  // edit single experience
  const editExperienceHandler = (e) => {
    const id = e.target.id;
    setButtonText("Update");
    setSelectedExperience(experiences.filter((data) => data.id == id)[0]);
  };

  // delete single experience
  const deleteExperienceHandler = (e) => {
    const id = e.target.parentNode.id;
    dispatch(curResumeActions.deleteExperience(id));
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
          {/* all the experiences that are added */}
          <div className={style["container"]}>
            {experiences.map((data) => {
              return (
                <div
                  key={data.id}
                  id={data.id}
                  className={style["item"]}
                  onClick={editExperienceHandler}
                >
                  <span>{data.title}</span>
                  <RxCross2 onClick={deleteExperienceHandler} />
                </div>
              );
            })}
            {experiences.length != 0 && (
              <div className={style["new-item"]} onClick={newExperienceHandler}>
                <GrFormAdd />
                <span>New</span>
              </div>
            )}
          </div>
          <Formik
            initialValues={selectedExperience}
            onSubmit={submitHandler}
            validationSchema={validationschemaforWork}
            enableReinitialize={true}
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
                <button className="secondary-button" type="submit">
                  {buttonText}
                </button>
              </ButtonRight>
            </Form>
          </Formik>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddWork;
