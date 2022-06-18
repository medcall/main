import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../lib/firebase-config";
import Login from "./Login";
import UserRegisteration from "./UserRegisteration";
import PatientDash from "./PatientDash";

const Home = () => {
  const [user] = useAuthState(auth);
  return <div>{user ? <UserRegisteration user={user} /> : <Login />}</div>;
};

export default Home;
