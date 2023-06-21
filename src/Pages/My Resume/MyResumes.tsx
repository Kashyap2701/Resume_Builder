/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ResumeCard from "../../Components/ResumeCard/ResumeCard";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { fetchResumeList, resume } from "../../Store/resumeSlice";
import { Row } from "../../Utils/FormStyle";
import styles from "./MyResume.module.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Service/firebase";

export const MyResumes = () => {
  const id = useAppSelector((state) => state.user.id);
  const resumeList = useAppSelector((state) => state.resume.resumeList);
  const dispatch = useAppDispatch();
  const [searchedResume, setSearchedResume] = useState<resume[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    dispatch(fetchResumeList(id));
  }, [resumeList]);

  const deleteResumeHandler = async (id: string) => {
    await deleteDoc(doc(db, "resume", id));
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredResumeList = resumeList.filter((resume) =>
      resume.resume_title.includes(e.target.value)
    );
    setSearchedResume(filteredResumeList);
    setIsSearching(true);
  };

  return (
    <>
      <Navbar />
      <div className={styles.resumePage}>
        <h1>My Resumes</h1>
        <Row className={styles.resumeActions}>
          <button className="secondary-button">
            <Link to={`/create-resume`}>Create Resume</Link>
          </button>
          <input
            type="text"
            placeholder="Search by Title"
            onChange={changeHandler}
          />
        </Row>
        <div className={styles.resumeList}>
          {((isSearching == true && searchedResume) || resumeList).map(
            (resume) => (
              <ResumeCard
                key={resume.id}
                id={resume.id}
                title={resume.resume_title}
                deleteHandler={deleteResumeHandler}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
