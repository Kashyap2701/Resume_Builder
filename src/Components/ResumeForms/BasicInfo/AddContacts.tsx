import React from "react";
import { useState } from "react";
import { Formik, Form } from "formik";
import { initialValueforContactInfo } from "../../../Utils/InitialValue";
import {
  AccordianForm,
  ButtonRight,
  Column,
  Divider,
  Row,
} from "../../../Utils/FormStyle";
import InputField from "../../InputField/InputField";
import { Toaster } from "react-hot-toast";
import { save } from "../../../Utils/Toster";
import { useAppDispatch, useAppSelector } from "../../../Store/hooks";
import { useParams } from "react-router";
import { curResumeActions } from "../../../Store/curResumeSlice";
import { contact } from "../../../Utils/Types";
import AccordianHeader from "../AccordianHeader";

const AddContactsForm = () => {
  const [isexpand, setIsExpand] = useState(false);
  const dispatch = useAppDispatch();
  const resumeId = useParams().id;
  const resume = useAppSelector(
    (state) =>
      state.resume.resumeList.filter((resume) => resume.id == resumeId)[0]
  );

  // Handler to save contact details
  const submitHandler = (values: contact) => {
    dispatch(curResumeActions.addContacts(values));
    save("Contacts Added");
  };
  return (
    <div>
      <AccordianHeader
        title="Contacts"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          <Formik
            initialValues={
              resume?.resumeData.contacts || initialValueforContactInfo
            }
            onSubmit={submitHandler}
          >
            <Form>
              <Column>
                <Row>
                  <InputField
                    id="mobile"
                    name="mobileno"
                    label="Mobile No"
                    placeholder="+91 XXXXXXXXX"
                  />
                  <Divider />
                  <InputField
                    id="email"
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="abc@email.com"
                  />
                </Row>
                <Row>
                  <InputField
                    id="wesite"
                    name="website"
                    label="Website"
                    placeholder="www.example.com"
                  />
                  <Divider />
                  <InputField
                    id="address"
                    name="address"
                    label="Address"
                    placeholder="City Name"
                  />
                </Row>
                <ButtonRight>
                  <button className="secondary-button" type="submit">
                    Save
                  </button>
                  <Toaster position="bottom-center" />
                </ButtonRight>
              </Column>
            </Form>
          </Formik>
        </AccordianForm>
      )}
    </div>
  );
};

export default AddContactsForm;
