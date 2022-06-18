import React, { useState, useContext, useEffect, useMemo } from "react";
import "./style.css";
import { db } from "../lib/firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

const UserRegisteration = ({ user }) => {
  // const [users, setUsers] = useState([]);
  const [fullname, setFullname] = useState(user.displayName || "");
  const [email, setEmail] = useState(user.email || "");
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber || "");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("Select Blood Group");
  const [gender, setGender] = useState("Select Gender");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [allergy, setAllergy] = useState("");
  const [current_medication, setCurrent_medication] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);
  const [Doc_qual, setDoc_qual] = useState("");
  const [Doc_special, setDoc_special] = useState("");
  const uid = user.uid;

  //   console.log(uid);

  const userCollectionRef = collection(db, "users");
  const doctorCollectionRef = collection(db, "doctors");

  const createUser = async () => {
    await addDoc(userCollectionRef, {
      address,
      age,
      allergy,
      city,
      current_medication,
      email,
      fullname,
      gender,
      isDoctor,
      phoneNumber,
      pincode,
      state,
      uid,
    });
    if (isDoctor) {
      await addDoc(doctorCollectionRef, {
        uid,
        doc_qual: Doc_qual,
        doc_specil: Doc_special,
      });
    }
  };

  //   useEffect(() => {
  //     const getUsers = async () => {
  //       const data = await getDocs(userCollectionRef);
  //       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     };

  //     getUsers();
  //   }, []);

  return (
    <div className="container">
      <form>
        <div className="body d-md-flex align-items-center justify-content-between">
          <div className="box-2 d-flex flex-column h-100">
            <div className="mt-5">
              <p className="logo">MedCall</p>
              <p className="mb-1 h-1">User Registration</p>
              <p className="text-muted mb-2">Please Enter your Details</p>
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center">
                  <div>
                    <div className="form-row">
                      <div className="form-group">
                        <input
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Email Id"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="Mobile/Phone No"
                      />
                    </div>
                    <div className="row form-row">
                      <div className="form-group col-md-3">
                        <input
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                          type="text"
                          className="form-control"
                          id="inputAddress"
                          placeholder="Age"
                        />
                      </div>
                      <div className="form-group col-md-5">
                        <select
                          value={bloodGroup}
                          onChange={(e) => setBloodGroup(e.target.value)}
                          id="inputState"
                          className="form-control"
                        >
                          <option>Select Blood Group</option>
                          <option>O+</option>
                          <option>O-</option>
                          <option>A+</option>
                          <option>A-</option>
                          <option>B+</option>
                          <option>B-</option>
                          <option>AB+</option>
                          <option>AB-</option>
                        </select>
                      </div>
                      <div className="form-group col-md-4">
                        <select
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                          id="inputState"
                          className="form-control"
                          placeholder="Gender"
                        >
                          <option>Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>
                    <button
                      className="btn btn-outline-dark"
                      onClick={(e) => {
                        e.preventDefault();
                        createUser()
                          .then(() => {
                            window.open("/dashboard");
                          })
                          .catch((err) => {
                            alert(err);
                          });
                      }}
                    >
                      Sign in
                    </button>
                  </div>
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
          <div className="box-1 mt-md-0 mt-5">
            <div className="mt-5">
              <div className="d-flex flex-column">
                <div className="d-flex align-items-center">
                  <div className="form-row row">
                    <div className="form-group col-md-11">
                      <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        className="form-control"
                        id="address-2"
                        placeholder="Address"
                      />
                    </div>
                    <div className="form-group col-md-11">
                      <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="City"
                      />
                    </div>
                    <div className="form-group col-md-11">
                      <input
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        id="text"
                        className="form-control"
                        placeholder="State"
                      />
                    </div>
                    <div className="form-group col-md-11">
                      <input
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        type="text"
                        className="form-control"
                        id="inputZip"
                        placeholder="Pincode"
                      />
                    </div>
                    <div className="form-group col-md-11">
                      <input
                        value={allergy}
                        onChange={(e) => setAllergy(e.target.value)}
                        type="text"
                        className="form-control"
                        id="inputZip"
                        placeholder="Any allergiy"
                      />
                    </div>
                    <div className="form-group col-md-11">
                      <input
                        value={current_medication}
                        onChange={(e) => setCurrent_medication(e.target.value)}
                        type="text"
                        className="form-control"
                        id="inputZip"
                        placeholder="Any Current Medication"
                      />
                    </div>
                    {/* Check box enable : show two doctor's text box other wise not display it */}
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          value={isDoctor}
                          onChange={() => setIsDoctor(!isDoctor)}
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" htmlFor="gridCheck">
                          Are you a Doctor?
                        </label>
                      </div>
                    </div>
                    {isDoctor ? (
                      <div>
                        <div className="form-group col-md-11">
                          <input
                            value={Doc_qual}
                            onChange={(e) => setDoc_qual(e.target.value)}
                            type="text"
                            className="form-control"
                            id="inputZip"
                            placeholder="Doctors Qualification"
                          />
                        </div>
                        <div className="form-group col-md-11">
                          <input
                            value={Doc_special}
                            onChange={(e) => setDoc_special(e.target.value)}
                            type="text"
                            className="form-control"
                            id="inputZip"
                            placeholder="Doctor's Specialisation"
                          />
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserRegisteration;
