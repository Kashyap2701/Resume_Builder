/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ResumeCard from "../../Components/ResumeCard/ResumeCard";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { fetchResumeList } from "../../Store/resumeSlice";
import { Row } from "../../Utils/FormStyle";
import styles from "./MyResume.module.css";

export const MyResumes = () => {
  const id = useAppSelector((state) => state.user.id);
  const resumeList = useAppSelector((state) => state.resume.resumeList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResumeList(id));
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.resumePage}>
        <h1>My Resumes</h1>
        <Row className={styles.resumeActions}>
          <button className="secondary-button">
            <Link to={`/create-resume`}>Create Resume</Link>
          </button>
          <input type="text" placeholder="Search by Title" />
        </Row>
        <div className={styles.resumeList}>
          {resumeList.map((resume) => (
            <ResumeCard
              key={resume.id}
              id={resume.id}
              title={resume.resume_title}
            />
          ))}
        </div>
      </div>
    </>
  );
};
