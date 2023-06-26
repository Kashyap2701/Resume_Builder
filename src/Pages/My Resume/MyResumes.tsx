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
import { ThreeDots } from "react-loader-spinner";

export const MyResumes = () => {
  const id = useAppSelector((state) => state.user.id);
  const [isDelete, setIsDelete] = useState(false);
  const [searchedResume, setSearchedResume] = useState<resume[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const resumeList = useAppSelector((state) => state.resume.resumeList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setIsLoading(true);
    dispatch(fetchResumeList(id));
    setIsLoading(false);
  }, [isDelete]);

  const deleteResumeHandler = async (id: string) => {
    setIsLoading(true);
    await deleteDoc(doc(db, "resume", id));
    setIsDelete(!isDelete);
    setIsLoading(false);
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const filteredResumeList = resumeList.filter((resume) =>
      resume.resume_title.toLocaleLowerCase().includes(e.target.value)
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
          {!isLoading ? (
            ((isSearching == true && searchedResume) || resumeList).map(
              (resume) => (
                <ResumeCard
                  key={resume.id}
                  id={resume.id}
                  title={resume.resume_title}
                  deleteHandler={deleteResumeHandler}
                />
              )
            )
          ) : (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ea5a49"
              ariaLabel="three-dots-loading"
              wrapperStyle={{
                width: "100%",
                height: "60vh",
                alignItems: "center",
                justifyContent: "center",
              }}
              visible={true}
            />
          )}
        </div>
      </div>
    </>
  );
};
