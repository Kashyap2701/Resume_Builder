import style from "../Preview.module.css";
import RightSectionTitle from "../RightSectionTitle";

const About = () => {
  return (
    <>
      <RightSectionTitle title="ABOUT" />
      <div className={style["about-section"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus iste
        qui, ad, aliquam voluptate velit hic id.
      </div>
    </>
  );
};

export default About;
