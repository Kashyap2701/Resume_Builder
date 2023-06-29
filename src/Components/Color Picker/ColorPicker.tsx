import React from "react";
import style from "./ColorPicker.module.css";

type ColorPickerType = {
  colorHandler: (e: React.MouseEvent) => void;
};

const ColorPicker = ({ colorHandler }: ColorPickerType) => {
  return (
    <div className={style["container"]}>
      <div className={style["color-boxs"]}>
        <div
          className={style["color"]}
          style={{ backgroundColor: "#520024" }}
          onClick={colorHandler}
        ></div>
        <div
          className={style["color"]}
          style={{ backgroundColor: "#330052" }}
          onClick={colorHandler}
        ></div>
        <div
          className={style["color"]}
          style={{ backgroundColor: "#133361" }}
          onClick={colorHandler}
        ></div>
        <div
          className={style["color"]}
          style={{ backgroundColor: "#095a24" }}
          onClick={colorHandler}
        ></div>
        <div
          className={style["color"]}
          style={{ backgroundColor: "#fe715b" }}
          onClick={colorHandler}
        ></div>
      </div>
    </div>
  );
};

export default ColorPicker;
