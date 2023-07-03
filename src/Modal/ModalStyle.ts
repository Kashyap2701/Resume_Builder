import styled from "styled-components";

export const Title = styled.h3`
  color: var(--extra-dark-color);
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  color: var(--text-color-light);
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

export const OutlineButton = styled.button`
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  padding: 10px 16px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const Button = styled.button`
  background-color: var(--primary-color);
  color: var(--text-color-white);
  border: none;
  border-radius: 4px;
  padding: 10px 16px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

export const CancelIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: var(--primary-color);
`;
