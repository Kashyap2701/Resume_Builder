import defaultProfilePhoto from "../../../Assets/no-profile.png";
import style from "../Preview.module.css";

const ProfilePhoto = () => {
  return (
    <div className={`${style["profile-photo-section"]}`}>
      <img src={defaultProfilePhoto} alt="profile-photo" />
    </div>
  );
};

export default ProfilePhoto;
