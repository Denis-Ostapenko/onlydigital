import React from "react";
export const UserContext = React.createContext({
  userBd: { login: "steve.jobs@example.com", password: "password" },
  user: { login: "", password: "" },
});
export default UserContext;
