import React from "react";
import noprofile from "../Assets/no-profile.png";

type AvatarProps = {
  size: string;
  src?: string;
  classname?: string;
};

const Avatar = ({ size, src = noprofile, classname }: AvatarProps) => {
  const profile = {
    width: size,
    height: size,
  };

  return (
    <div className={classname} style={profile}>
      <img src={src} alt="profile-photo" />
    </div>
  );
};

export default Avatar;
