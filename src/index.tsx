import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import UserContext from "./context";
import GlobalStyle from "./styles/GlobalStyle";

interface IUser {
  login: string;
  password: string;
}
interface IContext {
  userBd: IUser;
  user: IUser;
}

const context: IContext = {
  userBd: { login: "steve.jobs@example.com", password: "password" },
  user: localStorage.getItem("login")
    ? {
        login: JSON.parse(localStorage.getItem("login")!),
        password: JSON.parse(localStorage.getItem("password")!),
      }
    : { login: "", password: "" },
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <UserContext.Provider value={context}>
      <GlobalStyle />
      <App />
    </UserContext.Provider>
  </BrowserRouter>
);
