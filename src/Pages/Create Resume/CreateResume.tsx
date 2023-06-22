import React, { useRef, useState } from "react";
import style from "./CreateResume.module.css";
import Preview from "../../Components/Resume Privew/Preview";
import ActionBar from "../../Components/Resume Action/ActionBar";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router";
import { useAppSelector } from "../../Store/hooks";
import ResumeForms from "../../Components/ResumeForms/ResumeForms";
import Modal from "react-modal";
import {
  customStyles,
  modalActionButton,
  modalActionButtonContainer,
} from "../../Utils/ModalStyle";

const CreateResume = () => {
  const resumeRef = useRef(null);
  const resumeId = useParams().id as string;
  const iseditMode = resumeId ? true : false;
  const resume = useAppSelector(
    (state) =>
      state.resume.resumeList.filter((resume) => resume.id == resumeId)[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  const screenWidth = window.innerWidth;

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const downloadresumeHandler = useReactToPrint({
    content: () => resumeRef.current,
  });

  return (
    <div className={style["container"]}>
      <ActionBar
        downloadresumeHandler={downloadresumeHandler}
        title={resume ? resume.resume_title : ""}
        openModal={openModal}
      />
      <div className={style["resume-container"]}>
        <div className={style["resume-form"]}>
          <div className={style["form-section"]}>
            <ResumeForms editMode={iseditMode} currentResume={resume} />
          </div>
        </div>
        <div className={style["resume-preview"]}>
          <Preview ref={resumeRef} />
        </div>
        {screenWidth <= 1024 && (
          <Modal
            isOpen={isOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
            style={customStyles}
          >
            <div style={modalActionButtonContainer}>
              <button
                className="secondary-button"
                style={modalActionButton}
                onClick={() => closeModal()}
              >
                Close
              </button>
              <button
                className="secondary-button"
                style={modalActionButton}
                onClick={downloadresumeHandler}
              >
                Download
              </button>
            </div>
            <Preview ref={resumeRef} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default CreateResume;
