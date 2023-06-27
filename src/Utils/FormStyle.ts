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

export const AccordianFormHeader = styled.div`
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
  &:hover {
    background-color: var(--extra-light-color);
    cursor: pointer;
  }
`;

export const Container = styled.div``;

export const SideBySideContainer = styled.div`
  display: flex;
  > div {
    width: 50%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const FlexWrapContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FlexContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileUploadSection = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;

  > div {
    display: flex;
    align-items: center;
  }
  svg {
    color: var(--dark-color);
    margin-left: 1rem;
    font-size: large;
    cursor: pointer;
  }
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 0.3rem;
  margin: 0.3rem;
  color: white;
  background-color: var(--dark-color);
  border-radius: 3px;
  position: relative;

  :hover svg {
    display: flex;
  }

  > span {
    font-size: smaller;
  }

  > svg {
    display: none;
    border-radius: 50%;
    padding: 0.1rem;
    color: var(--text-color-white);
    background-color: var(--primary-color);
    position: absolute;
    cursor: pointer;
    top: -5px;
    right: -5px;
    font-size: smaller;
  }
`;

export const NewItem = styled.div`
  display: flex;
  align-items: center;
  color: var(--dark-color);
  font-weight: 500;
  cursor: pointer;
  font-size: small;

  :active: {
    transform: scale(0.89);
  }

  > svg {
    color: var(--dark-color);
  }
`;

export const InfoList = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: white;
  background-color: var(--dark-color);
  border-radius: 3px;
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;
  font-size: small;

  :active {
    transform: scale(0.96);
  }

  :hover {
    background-color: var(--extra-dark-color);
    cursor: pointer;
  }

  > span {
    pointer-events: none;
  }

  > svg {
    margin-left: 0.2rem;
    cursor: pointer;
  }
`;
