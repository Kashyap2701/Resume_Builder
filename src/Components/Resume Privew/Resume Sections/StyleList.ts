import styled from "styled-components";

type ListProp = {
  resumeColor: string;
};

export const List = styled.li`
  ::after {
    content: "";
    position: absolute;
    top: 5px;
    left: -25px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 2px solid ${(props: ListProp) => props.resumeColor};
  }

  ::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -23px;
    width: 2px;
    height: 115px;
    background: ${(props: ListProp) => props.resumeColor};
  }
`;
