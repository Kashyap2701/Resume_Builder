/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { doc, getDoc } from "@firebase/firestore";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import LoadingDots from "../../Components/LoadingDots";
import Preview from "../../Components/Resume Privew/Preview";
import { db } from "../../Service/firebase";
import {
  curResumeActions,
  fetchResumeDetails,
} from "../../Store/curResumeSlice";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { FlexContainerCenter } from "../../Utils/FormStyle";

const SharedResume = () => {
  const sharedResumeId = useParams().id!;
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.curResume.status);
  console.log(sharedResumeId);

  useEffect(() => {
    const fetchSharedResume = async () => {
      const docRef = doc(db, "resume", sharedResumeId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(fetchResumeDetails(docSnap.id));
      } else {
        console.log("No such document!");
      }
    };
    fetchSharedResume();
    return () => {
      dispatch(curResumeActions.resetState());
    };
  }, []);

  return (
    <FlexContainerCenter className="h-100vh">
      {status == "fulfilled" ? <Preview /> : <LoadingDots />}
    </FlexContainerCenter>
  );
};

export default SharedResume;
