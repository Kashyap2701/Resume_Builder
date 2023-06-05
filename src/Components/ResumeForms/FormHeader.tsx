import React from "react";
import { AiFillDownCircle } from "react-icons/ai";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
  border-left: 3px solid var(--dark-color);
  svg {
    cursor: pointer;
    font-size: large;
  }
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
