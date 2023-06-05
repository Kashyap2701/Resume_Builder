import style from "./Preview.module.css";

type RightSectionTitleProp = {
  title: string;
};

const RightSectionTitle = (props: RightSectionTitleProp) => {
  return (
    <div className={style["section-title"]}>
      <h3>{props.title}</h3>
    </div>
  );
};

export default RightSectionTitle;
