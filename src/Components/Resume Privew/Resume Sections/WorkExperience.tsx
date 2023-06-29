import styled from "styled-components";
import { useAppSelector } from "../../../Store/hooks";
import style from "../Preview.module.css";
import RightSectionTitle from "../RightSectionTitle";
import { List } from "./StyleList";

const WorkExperience = () => {
  const experiences = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.experiences
  );
  const resumeColor = useAppSelector(
    (state) => state.curResume.resumeDetails.color
  );

  return (
    <>
      {experiences.length !== 0 && (
        <>
          <RightSectionTitle title="WORK EXPERIENCE" />
          <div className={style["work-experience-section"]}>
            <ul>
              {experiences.map((exp) => {
                return (
                  <List
                    key={exp.id}
                    resumeColor={resumeColor ? resumeColor : "#fe715b"}
                  >
                    <div className={style["date"]}>
                      <i>
                        {exp.startedYear} - {exp.endedYear}
                      </i>
                    </div>
                    <div className={style["info"]}>
                      <p className={style["title"]}>
                        {exp.jobTitle}
                        <span> | </span>
                        {exp.companyName}
                      </p>
                      <p>{exp.desc}</p>
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

export default WorkExperience;
