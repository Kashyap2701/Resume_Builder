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

export const MyResumes = () => {
  const id = useAppSelector((state) => state.user.id);
  const [isDelete, setIsDelete] = useState(false);
  const [searchedResume, setSearchedResume] = useState<resume[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const resumeList = useAppSelector((state) => state.resume.resumeList);
  const status = useAppSelector((state) => state.resume.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResumeList(id));
  }, [isDelete]);

  // Handler to delete single resume
  const deleteResumeHandler = useCallback(async (id: string) => {
    await deleteDoc(doc(db, "resume", id));
    setIsDelete((prevState) => !prevState);
  }, []);

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
                  deleteHandler={deleteResumeHandler}
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
      </div>
    </>
  );
};
