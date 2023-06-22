import { useAppSelector } from "../../../Store/hooks";
import style from "../Preview.module.css";
import RightSectionTitle from "../RightSectionTitle";

const WorkExperience = () => {
  const experiences = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.experiences
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
                  <li key={exp.id}>
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
                  </li>
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
