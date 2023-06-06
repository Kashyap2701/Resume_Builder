import style from "../Preview.module.css";
import RightSectionTitle from "../RightSectionTitle";

const Languages = () => {
  return (
    <>
      <RightSectionTitle title="LANGUAGES" />
      <div className={style["languages-section"]}>
        <p>English</p>
        <p>Hindi</p>
        <p>Gujarati</p>
      </div>
    </>
  );
};

export default Languages;
