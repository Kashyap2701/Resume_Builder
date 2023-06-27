/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import style from "./CreateResume.module.css";
import Preview from "../../Components/Resume Privew/Preview";
import ActionBar from "../../Components/Resume Action/ActionBar";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import ResumeForms from "../../Components/ResumeForms/ResumeForms";
import Modal from "react-modal";
import {
  customStyles,
  modalActionButton,
  modalActionButtonContainer,
} from "../../Utils/ModalStyle";
import {
  curResumeActions,
  fetchResumeDetails,
} from "../../Store/curResumeSlice";
import { Toaster } from "react-hot-toast";
import LoadingDots from "../../Components/LoadingDots";

const CreateResume = () => {
  const resumeRef = useRef(null);
  const resumeId = useParams().id as string;
  const iseditMode = !!resumeId;
  const resume = useAppSelector(
    (state) =>
      state.resume.resumeList.filter((resume) => resume.id == resumeId)[0]
  );
  const status = useAppSelector((state) => state.curResume.status);
  const [isOpen, setIsOpen] = useState(false);
  const screenWidth = window.innerWidth;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (iseditMode) {
      dispatch(fetchResumeDetails(resume.id));
    }
    return () => {
      dispatch(curResumeActions.resetState());
    };
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const downloadresumeHandler = useReactToPrint({
    content: () => resumeRef.current,
    pageStyle: `
    @page {
      size: ${500}px ${500 * 1.41}px;
    }
  `,
  });

  return status == "fulfilled" || status == "" ? (
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

        {/* if screen width less then 1024, resume preview will convert to Modal */}
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
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  ) : (
    <LoadingDots />
  );
};

export default CreateResume;
