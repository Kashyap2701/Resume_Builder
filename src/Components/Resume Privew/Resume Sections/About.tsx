import { useAppSelector } from "../../../Store/hooks";
import style from "../Preview.module.css";
import RightSectionTitle from "../RightSectionTitle";

const About = () => {
  const about = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.profileInfo.about
  );

  return (
    <>
      {about != "" && (
        <>
          <RightSectionTitle title="ABOUT" />
          <div className={style["about-section"]}>{about}</div>
        </>
      )}
    </>
  );
};

export default About;
