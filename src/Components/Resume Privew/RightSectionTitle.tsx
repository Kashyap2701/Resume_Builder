import { useAppSelector } from "../../Store/hooks";
import style from "./Preview.module.css";

type RightSectionTitleProp = {
  title: string;
};

const RightSectionTitle = (props: RightSectionTitleProp) => {
  const resumeColor = useAppSelector(
    (state) => state.curResume.resumeDetails.color
  );

  return (
    <div
      className={style["section-title"]}
      style={{ backgroundColor: `${resumeColor}` }}
    >
      <h3>{props.title}</h3>
    </div>
  );
};

export default RightSectionTitle;
