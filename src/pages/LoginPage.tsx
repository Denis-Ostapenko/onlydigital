import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import UserContext from "../context";

function LoginPage() {
  let navigate = useNavigate();
  const user = useContext(UserContext);
  useEffect(() => {
    if (user.user.login !== "") {
      navigate("/profile");
    }
  }, [user.user.login, navigate]);
  return <Form></Form>;
}

export default LoginPage;
