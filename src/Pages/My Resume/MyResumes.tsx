/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import noresume from "../../Assets/noresumes.png";
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
  const resumeList = useAppSelector((state) => state.resume.resumeList);
  const status = useAppSelector((state) => state.resume.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchResumeList(id));
  }, [isDelete]);

  const deleteResumeHandler = async (id: string) => {
    await deleteDoc(doc(db, "resume", id));
    setIsDelete(!isDelete);
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
      <div className={styles.container}>
        <Row className={styles.resumeHeader}>
          <h1>Resume List</h1>
          <div className={styles.resumeActions}>
            <Link to={`/create-resume`}>
              <button className="secondary-button">Create Resume </button>
            </Link>

            <input
              type="text"
              placeholder="Search by Title"
              onChange={changeHandler}
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
              <div className={styles.noresumesection}>
                <img src={noresume} alt="empty-resumelist" />
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              height: "60vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#ea5a49"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          </div>
        )}
      </div>
    </>
  );
};
