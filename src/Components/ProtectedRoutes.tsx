/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../Store/hooks";

type ProtectedRoutesProps = {
  Component: React.FC;
};

const ProtectedRoutes = ({ Component }: ProtectedRoutesProps) => {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    // if user is not logged in then navigate to login page
    !isLoggedIn && navigate("/login");
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return null;
  }

  return <Component />;
};

export default ProtectedRoutes;
