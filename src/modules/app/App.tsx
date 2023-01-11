import { LoginModule } from "../login/login-module";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomeModule } from "../home/home-module";
import { getCookie } from "../../core/helpers/utils";

function App() {
  if (!getCookie("access_token")) {
    return (
      <Routes>
        <Route path="/login" element={<LoginModule />} />
        <Route path="/*" element={<LoginModule />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<HomeModule />} />
      <Route path="/login" element={<LoginModule />} />
    </Routes>
  );
}

export default App;
