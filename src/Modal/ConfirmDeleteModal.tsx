/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import Modal from "react-modal";
import {
  Button,
  ButtonContainer,
  Message,
  OutlineButton,
  Title,
} from "../Modal/ModalStyle";

const customStyles = {
  overlay: {
    background: "rgb(0 0 0 / 70%)",
  },
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

Modal.setAppElement("#root");
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
