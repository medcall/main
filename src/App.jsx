import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import DoctorDash from "./pages/DoctorDash";
import DoctorPatientVisit from "./pages/DocterPatientVisit";
import PatientDash from "./pages/PatientDash";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
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
  );
}

export default App;
