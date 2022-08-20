import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context";
import * as P from "../styles/ProfileStyle";

const Profile = () => {
  const user = useContext(UserContext);
  let navigate = useNavigate();
  const buttonClick = () => {
    localStorage.clear();
    user.user.login = "";
    user.user.password = "";
    navigate("/login");
  };
  return (
    <>
      <P.Title2>
        <span>Здравствуйте, </span>
        {user.user.login}
      </P.Title2>
      <P.Button onClick={() => buttonClick()}>Выйти</P.Button>
    </>
  );
};

export default Profile;
