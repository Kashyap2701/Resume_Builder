import style from "./Preview.module.css";
import Contacts from "./Resume Sections/Contacts";
import ProfilePhoto from "./Resume Sections/ProfilePhoto";
import Skills from "./Resume Sections/Skills";
import Interest from "./Resume Sections/Interest";
import { ProfileInfo } from "./Resume Sections/ProfileInfo";
import About from "./Resume Sections/About";
import WorkExperience from "./Resume Sections/WorkExperience";
import Education from "./Resume Sections/Education";
import Languages from "./Resume Sections/Languages";
import { forwardRef } from "react";
import ColorPicker from "../Color Picker/ColorPicker";
import { useAppSelector } from "../../Store/hooks";
import { useDispatch } from "react-redux";
import { curResumeActions } from "../../Store/curResumeSlice";

type PreviewType = {
  ref: React.MutableRefObject<HTMLDivElement | null>;
};

const Preview = forwardRef<null, PreviewType>((props, ref) => {
  const resumeColor = useAppSelector(
    (state) => state.curResume.resumeDetails.color
  );
  const dispatch = useDispatch();

  const colorHandler = (e) => {
    // console.log(e.target.style.backgroundColor);
    dispatch(curResumeActions.changeColor(e.target.style.backgroundColor));
  };

  return (
    <>
      <div className={style["container"]}>
        <ColorPicker colorHandler={colorHandler} />
        <div id="resume" className={style["resume-preview-wrapper"]} ref={ref}>
          <div
            className={style["left-section"]}
            style={{ backgroundColor: `${resumeColor}` }}
          >
            <ProfilePhoto />
            <Contacts />
            <Skills />
            <Interest />
          </div>
          <div className={style["right-section"]}>
            <ProfileInfo />
            <About />
            <WorkExperience />
            <Education />
            <Languages />
          </div>
        </div>
      </div>
    </>
  );
});

export default Preview;
