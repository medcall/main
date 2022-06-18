import React from "react";
import loginImage from "../images/login_image.png";
import "./style.css";
import { SignInWithGoogle } from "../lib/firebase-config";

const login = () => {
  return (
    <div className="container">
      <div className="body d-md-flex align-items-center justify-content-between">
        <div className="box-1 mt-md-0 mt-5">
          <img src={loginImage} alt="design" />
        </div>
        <div className=" box-2 d-flex flex-column h-100">
          <div className="mt-5">
            <p className="logo">MedCall</p>
            <p className="mb-1 h-1">Create Account with Google</p>
            <p className="text-muted mb-2">
              Welcome to MEDCALL where you directly connect with Best Doctors.
            </p>
            <div className="d-flex flex-column ">
              <div className="d-flex align-items-center">
                <button onClick={SignInWithGoogle} className="box me-2">
                  <span className="fab fa-google mb-2" />
                  <p className="mb-0">Google</p>
                </button>
              </div>
            </div>
          </div>
          <div className="mt-auto">
            <p className="footer text-muted mb-0 mt-md-0 mt-4">
              By register you agree with our
              <span className="p-color me-1">terms and conditions</span>and
              <span className="p-color ms-1">privacy policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
