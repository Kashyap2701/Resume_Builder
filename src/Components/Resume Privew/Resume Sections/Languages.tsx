import { useAppSelector } from "../../../Store/hooks";
import style from "../Preview.module.css";
import RightSectionTitle from "../RightSectionTitle";

const Languages = () => {
  const languages = useAppSelector((state) => state.language.languages);

  return (
    <>
      {languages.length !== 0 && (
        <>
          <RightSectionTitle title="LANGUAGES" />
          <div className={style["languages-section"]}>
            {languages.map((language) => {
              return <p key={language.id}>{language.name}</p>;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Languages;
