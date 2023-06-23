import styled from "styled-components";
import { useAppSelector } from "../../../Store/hooks";
import style from "../Preview.module.css";
import RightSectionTitle from "../RightSectionTitle";
import { List } from "./StyleList";

const Education = () => {
  const education = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.education
  );
  const resumeColor = useAppSelector(
    (state) => state.curResume.resumeDetails.color
  );

  return (
    <>
      {education.length !== 0 && (
        <>
          <RightSectionTitle title="EDUCATION" />
          <div className={style["education-section"]}>
            <ul>
              {education.map((degree) => {
                return (
                  <List
                    key={degree.id}
                    resumeColor={resumeColor ? resumeColor : "#fe715b"}
                  >
                    <div className={style["date"]}>
                      <i>
                        {degree.startedYear} - {degree.endedYear}
                      </i>
                    </div>
                    <div className={style["info"]}>
                      <p className={style["title"]}>
                        {degree.courseName}
                        <span> | </span>
                        {degree.university}
                      </p>
                      <p>{degree.desc}</p>
                    </div>
                  </List>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Education;
