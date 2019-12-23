import React from "react";
import Navbar from './components/Navbar'
import Note from './components/Note'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { Switch, Route } from "react-router-dom";
import cookie from 'react-cookies'
import {connect} from 'react-redux'
import "./App.css";
import ActiveUsers from "./components/ActiveUsers";
import { setIsLoggedIn, setUsername, setActiveUsers } from "./redux/actions/usersActions";

const App = ({dispatch,isLoggedIn,username}) => {

  React.useEffect(()=>{
    const username = cookie.load('username')
    const isLoggedIn = cookie.load('loggedin') ==="true"
    const activeUsers = Number(cookie.load('activeusers'))
    dispatch(setIsLoggedIn(isLoggedIn))
    dispatch(setUsername(username))
    dispatch(setActiveUsers(activeUsers))
  },[dispatch])

  return (
    <div className="App">
      <ActiveUsers />
      <Navbar/>
      <Switch>
        <Route path="/viewNotes" component={Note}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Signup}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
};

const mapStateToProps = state => ({
  username: state.userReducer.username,
  isLoggedIn: state.userReducer.isLoggedIn,
})

export default connect(mapStateToProps)(App);
