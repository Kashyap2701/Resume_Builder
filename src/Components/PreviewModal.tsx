import React from "react";
import Preview from "./Resume Privew/Preview";
import Modal from "react-modal";
import {
  customStyles,
  modalActionButton,
  modalActionButtonContainer,
} from "../Utils/ModalStyle";

type PreviewModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  downloadresumeHandler: () => void;
  resumeRef: React.MutableRefObject<null>;
};

const PreviewModal = (props: PreviewModalProps) => (
  <div>
    <Modal
      isOpen={props.isOpen}
      contentLabel="Example Modal"
      ariaHideApp={false}
      style={customStyles}
    >
      <div style={modalActionButtonContainer}>
        <button
          className="secondary-button"
          style={modalActionButton}
          onClick={() => props.closeModal()}
        >
          Close
        </button>
        <button
          className="secondary-button"
          style={modalActionButton}
          onClick={() => props.downloadresumeHandler()}
        >
          Download
        </button>
      </div>
      <Preview ref={props.resumeRef} />
    </Modal>
  </div>
);

export default PreviewModal;
