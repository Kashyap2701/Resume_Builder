/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import noresume from "../../Assets/noresumes.png";
import ResumeCard from "../../Components/ResumeCard/ResumeCard";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { fetchResumeList } from "../../Store/resumeSlice";
import { Row } from "../../Utils/FormStyle";
import styles from "./MyResume.module.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Service/firebase";
import LoadingDots from "../../Components/LoadingDots";
import { resume } from "../../Utils/Types";
import ConfirmDeleteModal from "../../Components/ConfirmDeleteModal";

export const MyResumes = () => {
  const id = useAppSelector((state) => state.user.id);
  const [isDelete, setIsDelete] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resumeIdToDelete, setResumeIdToDelete] = useState("");
  const [searchedResume, setSearchedResume] = useState<resume[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const resumeList = useAppSelector((state) => state.resume.resumeList);
  const status = useAppSelector((state) => state.resume.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResumeList(id));
  }, [isDelete]);

  // Handler to open confirm delete modal
  const openConfirmModal = (id: string) => {
    setResumeIdToDelete(id);
    setIsModalOpen(true);
  };

  // Handler to search resume
  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredResumeList = resumeList.filter((resume) =>
      resume.resume_title
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    setSearchedResume(filteredResumeList);
    setIsSearching(true);
  };

  // Handler to cancle delete resume
  const cancleDelete = () => {
    setIsModalOpen(false);
  };

  // Handler to delete resume
  const confirmDelete = useCallback(async (id: string) => {
    await deleteDoc(doc(db, "resume", id));
    setIsDelete((prevState) => !prevState);
    setIsModalOpen(false);
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Row className={styles.resumeHeader}>
          <h1>Resume List</h1>
          <div className={styles.resumeActions}>
            <Link to={`/create-resume`}>
              <button className="secondary-button">Create Resume </button>
            </Link>
            {/* input-box for search resume */}
            <input
              type="text"
              placeholder="Search by Title"
              onChange={searchHandler}
            />
          </div>
        </Row>
        <hr />
        {status === "fullfilled" ? (
          <div className={styles.resumeList}>
            {(isSearching && searchedResume.length === 0
              ? []
              : isSearching
              ? searchedResume
              : resumeList
            ).length !== 0 ? (
              ((isSearching && searchedResume) || resumeList).map((resume) => (
                <ResumeCard
                  key={resume.id}
                  id={resume.id}
                  title={resume.resume_title}
                  onDelete={() => openConfirmModal(resume.id)}
                />
              ))
            ) : (
              // no resume found background image
              <div className={styles.noresumesection}>
                <img src={noresume} alt="empty-resumelist" />
              </div>
            )}
          </div>
        ) : (
          <LoadingDots />
        )}
        {isModalOpen && (
          <ConfirmDeleteModal
            id={resumeIdToDelete}
            isOpen={isModalOpen}
            onCancel={cancleDelete}
            onConfirm={confirmDelete}
          />
        )}
      </div>
    </>
  );
};
