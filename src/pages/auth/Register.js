import React, { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import { getDatabase } from "firebase/database";
import firebase from "firebase";
import { saveUserData } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const auth = getAuth();

  // const saveData = (user) => {
  //   firebase.database().ref(`users/${user.uid}`).update({
  //     email: user.email,
  //     userId: user.uid,
  //     timestamp: Date.now()
  //   })
  // }

  const handleRegister = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registered user: ", user);
        // saveData(user);
        dispatch(saveUserData(user))
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error ocured: ", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h1>Register</h1>
      Email:
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      Password:
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Login;
