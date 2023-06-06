import style from "../Preview.module.css";
import Strip from "../Strip";

const Interest = () => {
  return (
    <>
      <Strip title="INTERESTS" />
      <div className={style["section"]}>
        <ul className={style["interests"]}>
          <li>Music</li>
          <li>Travel</li>
          <li>Reading</li>
        </ul>
      </div>
    </>
  );
};

export default Interest;
