import style from "../Preview.module.css";
import RightSectionTitle from "../RightSectionTitle";

const WorkExperience = () => {
  return (
    <>
      <RightSectionTitle title="WORK EXPERIENCE" />
      <div className={style["work-experience-section"]}>
        <ul>
          <li>
            <div className={style["date"]}>
              <i>2017 - Present</i>
            </div>
            <div className={style["info"]}>
              <p className={style["title"]}>
                ReactJs Trainee<span> | </span>
                Simform Solution
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
              </p>
            </div>
          </li>
          <li>
            <div className={style["date"]}>
              <i>2013 - 2017</i>
            </div>
            <div className={style["info"]}>
              <p className={style["title"]}>
                ReactJs Trainee<span> | </span>
                Simform Solution
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
              </p>
            </div>
          </li>
          <li>
            <div className={style["date"]}>
              <i>2011 - 2013</i>
            </div>
            <div className={style["info"]}>
              <p className={style["title"]}>
                ReactJs Trainee<span> | </span>
                Simform Solution
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WorkExperience;
