/* eslint-disable react-hooks/exhaustive-deps */
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ResumeCard from "../../Components/ResumeCard/ResumeCard";
import { db } from "../../Service/firebase";
import { useAppSelector } from "../../Store/hooks";
import { resumeData } from "../../Store/resumeSlice";
import { Row } from "../../Utils/FormStyle";
import styles from "./MyResume.module.css";

type resume = {
  id: string;
  resume_title: string;
  resumeData: resumeData;
  userId: string;
};

export const MyResumes = () => {
  const id = useAppSelector((state) => state.user.id);
  const [resumeList, setResumeList] = useState<resume[]>([]);
  const resumeCollectionRef = collection(db, "resume");

  useEffect(() => {
    const myResumeList = async () => {
      try {
        const data = await getDocs(resumeCollectionRef);
        const filteredData = data.docs
          .map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            } as resume;
          })
          .filter((doc) => {
            if (doc.userId == id) return doc;
          });
        setResumeList(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    myResumeList();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.resumePage}>
        <h1>My Resumes</h1>
        <Row className={styles.resumeActions}>
          <button className="secondary-button">
            <Link to="/create-resume">Create Resume</Link>
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
