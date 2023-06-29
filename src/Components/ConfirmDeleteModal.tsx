import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: "var(--extra-light-color)",
    borderRadius: "4px",
    padding: "20px",
    maxWidth: "400px",
    width: "100%",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
};

const Title = styled.h3`
  color: var(--extra-dark-color);
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: var(--text-color-light);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const OutlineButton = styled.button`
  color: var(--secondary-color);
  border: 1px solid var(--secondary-color);
  border-radius: 4px;
  padding: 10px 16px;
  margin-left: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Button = styled.button`
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

interface ConfirmDeleteModalProps {
  id: string;
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: (id: string) => void;
}

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  id,
  isOpen,
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      style={customStyles}
      contentLabel="Confirm Delete Modal"
    >
      <Title>Delete Resume ?</Title>
      <Message>
        This will delete resume from your resume list. Are you sure ?
      </Message>
      <ButtonContainer>
        <OutlineButton onClick={onCancel}>Cancel</OutlineButton>
        <Button onClick={() => onConfirm(id)}>Confirm</Button>
      </ButtonContainer>
    </Modal>
  );
};

export default ConfirmDeleteModal;
