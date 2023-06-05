import style from "../Preview.module.css";

export const ProfileInfo = () => {
  return (
    <div className={style["profile-info"]}>
      <h1>
        Kashyap <span>Patel</span>
      </h1>
      <p>Software Engineer</p>
    </div>
  );
};
