import { db } from "../lib/firebase-config";

const createUser = async (
  e,
  fullName,
  email,
  phoneNumber,
  age,
  bloodGroup,
  gender,
  address,
  city,
  state,
  pincode,
  allergy,
  current_medications,
  isDoctor,
  Doc_qual,
  Doc_special
) => {
  const userRef = db.collection("users");
  const docRef = db.collection("doctors");
  e.preventDefault();
  await userRef.add({
    fullName,
    email,
    phoneNumber,
    age,
    bloodGroup,
    gender,
    address,
    city,
    state,
    pincode,
    allergy,
    current_medications,
    isDoctor,
  });
  if (isDoctor) {
    await docRef.add({
      Doc_special,
      Doc_qual,
    });
  }
};

export default createUser;
