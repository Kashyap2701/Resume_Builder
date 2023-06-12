import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import ResumeCard from "../../Components/ResumeCard/ResumeCard";
import { Column, Row } from "../../Utils/FormStyle";
import styles from "./MyResume.module.css";

type resume = {
  id: string;
  title: string;
  description: string;
};

export const MyResumes = () => {
  const [resumes, setResumes] = useState<resume[]>([
    {
      id: "1",
      title: "Resume 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      title: "Resume 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      title: "Resume 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "1",
      title: "Resume 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      title: "Resume 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      title: "Resume 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "1",
      title: "Resume 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      title: "Resume 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      title: "Resume 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "1",
      title: "Resume 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      title: "Resume 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      title: "Resume 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "1",
      title: "Resume 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      title: "Resume 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      title: "Resume 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "1",
      title: "Resume 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      title: "Resume 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      title: "Resume 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "1",
      title: "Resume 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      title: "Resume 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      title: "Resume 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "1",
      title: "Resume 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      title: "Resume 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      title: "Resume 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "1",
      title: "Resume 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "2",
      title: "Resume 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "3",
      title: "Resume 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]);

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
          {resumes.map((resume) => (
            <ResumeCard
              key={resume.id}
              id={resume.id}
              title={resume.title}
              description={resume.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};
