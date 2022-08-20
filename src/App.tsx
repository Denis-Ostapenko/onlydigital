import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import * as AppStyle from "./styles/AppStyle";

function App() {
  return (
    <AppStyle.Container>
      <header>
        <AppStyle.Title>ONLY.</AppStyle.Title>
      </header>
      <AppStyle.Main>
        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="*"
            element={
              <p>
                Страница не найдена! <Link to="/profile">На главную</Link>
              </p>
            }
          />
        </Routes>
      </AppStyle.Main>
    </AppStyle.Container>
  );
}

export default App;
