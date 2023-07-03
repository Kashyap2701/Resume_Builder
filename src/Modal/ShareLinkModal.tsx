import React from "react";
import { MdCancel } from "react-icons/md";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { Input } from "../Utils/FormStyle";
import { save } from "../Utils/Toster";
import {
  Button,
  ButtonContainer,
  Message,
  OutlineButton,
  Title,
  CancelIcon,
} from "./ModalStyle";

Modal.setAppElement("#root");
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
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  },
};

type ShareLinkModalProp = {
  id: string;
  isOpen: boolean;
  closeModal: () => void;
};

const ShareLinkModal = ({ id, isOpen, closeModal }: ShareLinkModalProp) => {
  // url of resume
  const url = `${window.location.origin}/resume/${id}`;

  // Handler to copy url to clipboard
  const copyUrlHandler = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        save("URL is Copied");
      })
      .catch((error) => {
        console.error("Failed to copy value:", error);
      });
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Confirm Delete Modal"
    >
      <Title>Share a Link of Your Resume</Title>
      <Message>
        copy and paste the URL to send your resume via text, email
      </Message>
      <Input className="bg-gray" type="text" defaultValue={url} />
      <ButtonContainer>
        <OutlineButton>
          <Link to={url}>Open Link</Link>
        </OutlineButton>
        <Button onClick={copyUrlHandler}>Copy Link</Button>
      </ButtonContainer>
      <CancelIcon>
        <MdCancel onClick={closeModal} />
      </CancelIcon>
    </Modal>
  );
};

export default ShareLinkModal;
