import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [allergy, setAllergy] = useState("");
  const [current_medications, setCurrent_medications] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);
  const [Doc_qual, setDoc_qual] = useState("");
  const [Doc_special, setDoc_special] = useState("");

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        fullName,
        setFullName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        age,
        setAge,
        bloodGroup,
        setBloodGroup,
        gender,
        setGender,
        address,
        setAddress,
        city,
        setCity,
        state,
        setState,
        pincode,
        setPincode,
        allergy,
        setAllergy,
        current_medications,
        setCurrent_medications,
        isDoctor,
        setIsDoctor,
        Doc_qual,
        setDoc_qual,
        Doc_special,
        setDoc_special,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
