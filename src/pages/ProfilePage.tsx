import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../components/Profile";
import UserContext from "../context";

function ProfilePage() {
  let navigate = useNavigate();
  const user = useContext(UserContext);
  useEffect(() => {
    if (user.user.login === "") {
      navigate("/login");
    }
  }, [user.user.login, navigate]);
  return <Profile></Profile>;
}

export default ProfilePage;
