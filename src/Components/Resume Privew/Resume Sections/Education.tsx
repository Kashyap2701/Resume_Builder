import style from "../Preview.module.css";
import RightSectionTitle from "../RightSectionTitle";

const Education = () => {
  return (
    <>
      <RightSectionTitle title="EDUCATION" />
      <div className={style["education-section"]}>
        <ul>
          <li>
            <div className={style["date"]}>
              <i>2004 - 2008</i>
            </div>
            <div className={style["info"]}>
              <p className={style["title"]}>
                Degree<span> | </span>
                University
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum, voluptatibus!
              </p>
            </div>
          </li>
          <li>
            <div className={style["date"]}>
              <i>2002 - 2004</i>
            </div>
            <div className={style["info"]}>
              <p className={style["title"]}>
                Degree<span> | </span>
                University
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

export default Education;
