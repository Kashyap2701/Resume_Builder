/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import style from "./CreateResume.module.css";
import Preview from "../../Components/Resume Privew/Preview";
import ActionBar from "../../Components/Resume Action/ActionBar";
import { useReactToPrint } from "react-to-print";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import {
  curResumeActions,
  fetchResumeDetails,
} from "../../Store/curResumeSlice";
import { Toaster } from "react-hot-toast";
import LoadingDots from "../../Components/LoadingDots";
import { Container, FlexContainer } from "../../Utils/FormStyle";
import PreviewModal from "../../Components/PreviewModal";
import ResumeEditor from "../../Components/ResumeForms/ResumeEditor";

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

  // Handler for open preview modal
  function openModal() {
    setIsOpen(true);
  }

  // Handler for close preview modal
  function closeModal() {
    setIsOpen(false);
  }

  // Handler for download resume to
  const downloadresumeHandler = useReactToPrint({
    content: () => resumeRef.current,
    pageStyle: `
    @page {
      size: ${500}px ${500 * 1.41}px;
    }
  `,
  });

  return status == "fulfilled" || status == "" ? (
    <Container>
      <ActionBar
        downloadresumeHandler={downloadresumeHandler}
        title={resume ? resume.resume_title : ""}
        openModal={openModal}
      />
      <FlexContainer
        style={{
          height: "calc(100vh - 50px)",
        }}
      >
        <div className={style["resume-form"]}>
          <ResumeEditor />
        </div>
        <div className={style["resume-preview"]}>
          <Preview ref={resumeRef} />
        </div>
        {/* if screen width less then 1024, resume preview will convert to Modal */}
        {screenWidth <= 1024 && (
          <PreviewModal
            isOpen={isOpen}
            closeModal={closeModal}
            downloadresumeHandler={downloadresumeHandler}
            resumeRef={resumeRef}
          />
        )}
      </FlexContainer>
      <Toaster position="bottom-center" reverseOrder={false} />
    </Container>
  ) : (
    <LoadingDots />
  );
};

export default CreateResume;
