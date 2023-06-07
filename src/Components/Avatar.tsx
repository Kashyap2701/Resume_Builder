import React from "react";
import styled from "styled-components";
import noprofile from "../Assets/no-profile.png";

type AvatarProps = {
  size: string;
  src?: string;
  classname?: string;
};

const Avatar = ({ size, src = noprofile, classname }: AvatarProps) => {
  const ProfilePhoto = styled.div`
    width: ${size};
    height: ${size};
    img {
      object-fit: "cover";
      border-radius: 50%;
    }
  `;

  return (
    <ProfilePhoto className={classname}>
      <img src={src} alt="profile-photo" />
    </ProfilePhoto>
  );
};

export default Avatar;
