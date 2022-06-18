import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import DoctorDash from "./pages/DoctorDash";
import DoctorPatientVisit from "./pages/DocterPatientVisit";
import PatientDash from "./pages/PatientDash";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/doctor-dash" element={<DoctorDash />} />
            <Route
              path="/doctor-patient-visit"
              element={<DoctorPatientVisit />}
            />
            <Route path="/patient-dash" element={<PatientDash />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
