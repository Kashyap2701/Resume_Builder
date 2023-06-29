import { useAppSelector } from "../../../Store/hooks";
import style from "../Preview.module.css";
import Strip from "../Strip";

const Interest = () => {
  const interests = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.interests
  );

  return (
    <>
      {interests.length !== 0 && (
        <>
          <Strip title="INTERESTS" />
          <div className={style["section"]}>
            <ul className={style["interests"]}>
              {interests.map((interest) => {
                return <li key={interest.id}>{interest.name}</li>;
              })}
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Interest;
