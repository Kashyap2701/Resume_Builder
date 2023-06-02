import React from "react";
import { AiFillDownCircle } from "react-icons/ai";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0rem;
`;

type FormHeaderProps = {
  title: string;
  isexpand: boolean;
  toggleSection: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormHeader = (props: FormHeaderProps) => {
  return (
    <Header>
      <h3>{props.title}</h3>
      <AiFillDownCircle
        onClick={() => {
          props.toggleSection(!props.isexpand);
        }}
      />
    </Header>
  );
};

export default FormHeader;
