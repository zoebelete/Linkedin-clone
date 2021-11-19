import { auth } from "./firebase";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import "./Login.css";
// import { useHistory } from "react-router";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  // const navigate = useNavigate();

  const loginToApp = (event) => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
        if (auth) {
          history.push("/home");
        }
      })
      .catch((error) => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: photoUrl,
              })
            );
          });
        if (auth) {
          history.push("/hey");
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="login">
      <img
        src="https://www.pngitem.com/pimgs/m/27-278610_linkedin-logo-transparent-linkedin-logo-vector-hd-png.png"
        alt=""
      />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="full name(required if registering)"
        />
        <input
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          type="text"
          placeholder="Profilepic URL (optional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />

        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
