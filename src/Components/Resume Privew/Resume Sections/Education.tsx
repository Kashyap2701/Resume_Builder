import { useAppSelector } from "../../../Store/hooks";
import style from "../Preview.module.css";
import RightSectionTitle from "../RightSectionTitle";

const Education = () => {
  const education = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.education
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
                  <li key={degree.id}>
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

export default Education;
