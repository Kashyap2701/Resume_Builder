import React from "react";
import { useState } from "react";
import { Formik, Form } from "formik";
import FormHeader from "../FormHeader";
import { initialValueforContactInfo } from "../../../Utils/ResumeForm";
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

const AddContactsForm = () => {
  const [isexpand, setIsExpand] = useState(false);

  const submitHandler = (values: object) => {
    save("Contacts Added");
    console.log(values);
  };
  return (
    <div>
      <FormHeader
        title="Contacts"
        isexpand={isexpand}
        toggleSection={setIsExpand}
      />
      {isexpand && (
        <AccordianForm>
          <Formik
            initialValues={initialValueforContactInfo}
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
