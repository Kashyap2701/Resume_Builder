import React from "react";
import { AiFillDownCircle } from "react-icons/ai";
import { AccordianFormHeader } from "../../Utils/FormStyle";

type AccordianHeaderProps = {
  title: string;
  isexpand: boolean;
  toggleSection: React.Dispatch<React.SetStateAction<boolean>>;
};

const AccordianHeader = (props: AccordianHeaderProps) => {
  return (
    <AccordianFormHeader
      onClick={() => {
        props.toggleSection(!props.isexpand);
      }}
    >
      <h3>{props.title}</h3>
      <AiFillDownCircle />
    </AccordianFormHeader>
  );
};

export default AccordianHeader;
