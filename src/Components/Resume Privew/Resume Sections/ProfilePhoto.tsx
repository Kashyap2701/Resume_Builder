import defaultProfilePhoto from "../../../Assets/no-profile.png";
import { useAppSelector } from "../../../Store/hooks";
import style from "../Preview.module.css";

const ProfilePhoto = () => {
  const profilePhtoto = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.profileInfo.profilePhoto
  );
  return (
    <>
      {profilePhtoto && (
        <>
          <div className={`${style["profile-photo-section"]}`}>
            <img
              src={profilePhtoto || defaultProfilePhoto}
              alt="profile-photo"
            />
          </div>
        </>
      )}
    </>
  );
};

export default ProfilePhoto;
