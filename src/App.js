import './App.css';
import Home from './Home.js'
import React from 'react';
import NavBar from './JoinSignIn/NavBar.js';
import SignUp from './SignUp/SignUp.js';
import JoinSignIn from './JoinSignIn/JoinSignIn'
import Friends from './Friends/Friends.js'
import ProfilePage from './ProfilePage/ProfilePage'
import { Switch, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <NavBar />


      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/login" render={(props) => <JoinSignIn {...props} />} />
        <Route exact path="/register" render={(props) => <SignUp {...props} />} />
        <Route exact path="/community" render={(props) => <Friends {...props} />} />
        <Route exact path="/profile" render={(props) => <ProfilePage {...props} />} />


      </Switch>


    </>
  );
}

export default App;

