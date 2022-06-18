import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase-config";
import Login from "./Login";
import PatientDash from "./PatientDash";

const Home = () => {
  const [user] = useAuthState(auth);
  return <div>{user ? <PatientDash /> : <Login />}</div>;
};

export default Home;
