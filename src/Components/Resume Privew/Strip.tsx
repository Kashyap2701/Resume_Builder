import React from "react";
import style from "./Preview.module.css";

type StripProp = {
  title: string;
};

function Strip(props: StripProp) {
  return (
    <div className={style["strip"]}>
      <h3>{props.title}</h3>
    </div>
  );
}

export default Strip;
