import React, { useState } from "react"
import firebase from '../../configs/firebaseConfig'
import { useDispatch } from "react-redux"
import { updateUser } from "../../redux/slice/authSlice"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

  // TODO thought the LOCAL persistence may magically store this in a cookie or
  // local storage but it does not. Will to need to set up localstorage or cookie
  // to store this.
  const handleLogin = () => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      return firebase.auth().signInWithEmailAndPassword(email, password)
    })
      .then((userCredential) => {
        const user = userCredential.user
        if (user) {
          dispatch(updateUser({userId: user.uid, email: user.email}))
        }
        console.log("Signed in user: ", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("An error occured: ", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
