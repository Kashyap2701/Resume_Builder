import { useAppSelector } from "../../../Store/hooks";
import style from "../Preview.module.css";

export const ProfileInfo = () => {
  const profileInfo = useAppSelector(
    (state) => state.curResume.resumeDetails.resumeData.profileInfo
  );

  return (
    <>
      {(profileInfo.firstname ||
        profileInfo.lastname ||
        profileInfo.jobtitle) && (
        <div className={style["profile-info"]}>
          <h1>
            {profileInfo.firstname} <span>{profileInfo.lastname}</span>
          </h1>
          <p>{profileInfo.jobtitle}</p>
        </div>
      )}
    </>
  );
};
