/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
import { useAppSelector } from "../../Store/hooks";
import { Container } from "../../Utils/FormStyle";

type PreviewType = {
  ref: React.MutableRefObject<HTMLDivElement | null>;
};

const Preview = forwardRef<null, PreviewType>((props, ref) => {
  const resumeColor = useAppSelector(
    (state) => state.curResume.resumeDetails.color
  );

  return (
    <>
      <Container className="p-1">
        {/* resume preview  */}
        <div id="resume" className={style["resume-preview-wrapper"]} ref={ref}>
          {/* resume preview left section */}
          <div
            className={style["left-section"]}
            style={{ backgroundColor: `${resumeColor}` }}
          >
            <ProfilePhoto />
            <Contacts />
            <Skills />
            <Interest />
          </div>
          {/* resume preview right section */}
          <div className={style["right-section"]}>
            <ProfileInfo />
            <About />
            <WorkExperience />
            <Education />
            <Languages />
          </div>
        </div>
      </Container>
    </>
  );
});

export default Preview;
