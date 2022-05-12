import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Home from "./pages/Home";
import Secret from "./pages/protected/Secret";

// import { initializeApp } from "firebase/app";
// import { firebaseConfig } from "./configs/firebaseConfig";
// import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import firebase from "./configs/firebaseConfig";
import { useSelector, useDispatch } from "react-redux";
import { saveUserData } from "./redux/slice/authSlice";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  // firebase.initializeApp(firebaseConfig);

  const user = useSelector((state) => state.auth.value);

  console.log("user from state", user);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // dispatch(updateUser({userId: user.uid, email: user.email}));
        dispatch(saveUserData(user));
        // update firebase()
        
      } else {
        // dispatch(saveUser(undefined));
      }
    });
  }, []);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/reset">Reset password</Link>
          </li>
          <li>
            <Link to="/protected">Protected page</Link>
          </li>
          <li>
            <Link
              to="#"
              onClick={() => {
                firebase.auth().signOut()
                  .then(() => {
                    console.log("user signed out");
                  })
                  .catch((error) => {
                    console.log("error", error);
                  });
              }}
            >
              Log out
            </Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/reset">
          <Reset />
        </Route>

        <ProtectedRoute exact path="/protected" component={Secret} />

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
