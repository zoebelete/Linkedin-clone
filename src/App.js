import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
// import Login from "./Login";
import Sidebar from "./Sidebar";
// import Widgets from "./Widgets";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    // <Router>
    <div className="app">
      {/* {!user ? (
          <Login />
          
        ) : ( */}
      <Header />
      <div className="app_body">
        {/* <Switch>
            <Route exact path="/home"> */}

        <Sidebar />
        <Feed />
        {/* <Widgets /> */}
        {/* </Route>
          </Switch> */}
      </div>
      {/* )} */}
    </div>
    // {/* </Router> */}
  );
}

export default App;
