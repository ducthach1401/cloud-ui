import { LoginModule } from "../login/login-module";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomeModule } from "../home/home-module";
import { getCookie } from "../../core/helpers/utils";
import { Cookie } from "../../core/enums/cookies";
import { RegisterModule } from "../register/register-module";

function App() {
  if (!getCookie(Cookie.AccessToken)) {
    return (
      <Routes>
        <Route path="/login" element={<LoginModule />} />
        <Route path="/register" element={<RegisterModule />} />
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<HomeModule />} />
      <Route path="/*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
