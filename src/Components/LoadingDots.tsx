import React from "react";
import { ThreeDots } from "react-loader-spinner";

const LoadingDots = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#ea5a49"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
      visible={true}
    />
  );
};

export default LoadingDots;
