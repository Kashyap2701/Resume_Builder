import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Divider = styled.div`
  padding: 0.5rem;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
`;

export const Wrapper = styled.div`
  padding: 0.5rem;
`;

export const ButtonRight = styled.div`
  display: flex;
  justify-content: end;
`;

export const AccordianForm = styled.div`
  border: 1px solid var(--light-color);
  border-radius: 3px;
  padding: 1rem;
  margin-bottom: 1rem;
`;
