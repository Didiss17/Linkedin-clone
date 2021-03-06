import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { Container } from "@material-ui/core";
import { myLogin, logout, selectUser } from "./Features/userSlice";

import Login from "./Login";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import Widgets from "./Widgets";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          myLogin({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Container>
      <div className="app">
        <Header />

        {!user ? (
          <Login />
        ) : (
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        )}
      </div>
    </Container>
  );
}

export default App;
