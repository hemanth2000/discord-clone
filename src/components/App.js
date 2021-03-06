import { Routes, Route } from "react-router-dom";
import { LandingPage, LoginPage, RegisterPage, DashboardPage } from "../pages";

function App() {
  return (
    <div className="App font-body-font">
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route exact path="/login" element={<LoginPage />}></Route>
        <Route exact path="/register" element={<RegisterPage />}></Route>
        <Route exact path="/dashboard" element={<DashboardPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
