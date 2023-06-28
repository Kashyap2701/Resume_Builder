/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import Preview from "./Resume Privew/Preview";
import Modal from "react-modal";
import {
  customStyles,
  modalActionButton,
  modalActionButtonContainer,
} from "../Utils/ModalStyle";
import { FaDownload } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
import { FlexContainer } from "../Utils/FormStyle";

type PreviewModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  downloadresumeHandler: () => void;
  resumeRef: React.MutableRefObject<null>;
};

const PreviewModal = (props: PreviewModalProps) => {
  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="Example Modal"
      ariaHideApp={false}
      style={customStyles}
    >
      <FlexContainer
        style={modalActionButtonContainer}
        className="justify-space-between"
      >
        {/* Button for close preview modal */}
        <button
          className="secondary-button"
          style={modalActionButton}
          onClick={() => props.closeModal()}
        >
          <AiFillCloseSquare /> Close
        </button>
        {/* Button for download resume */}
        <button
          className="secondary-button"
          onClick={() => props.downloadresumeHandler()}
          style={modalActionButton}
        >
          <FaDownload /> Download
        </button>
      </FlexContainer>

      {/* Resume preview  */}
      <Preview ref={props.resumeRef} />
    </Modal>
  );
};

export default PreviewModal;
