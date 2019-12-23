import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
    setUsername,
    setPassword,
    setIsLoggedIn,
} from "../redux/actions/usersActions";
import axios from "axios";
import md5 from "md5";

const Signup = ({ dispatch, username, password, isLoggedIn }) => {
    const handleOnSubmit = e => {
        e.preventDefault();

        const body = {
            username,
            password: md5(password)
        };

        const config = {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        };

        axios
            .post("/authserver/addUser", body, config)
            .then(res => {
                dispatch(setIsLoggedIn(true));
                document.cookie = `username=${username}`;
                document.cookie = `activeusers=${res.data.counter}`
                document.cookie = `password=${md5(password)}`;
                document.cookie = `loggedin=true`;

            })
            .catch(e => {
                dispatch(setIsLoggedIn(false));
                document.cookie = `username=`;
                document.cookie = `password=`;
                document.cookie = `loggedin=false`;

                console.log("Invalid user credentials");
            });
    };

    return (
        <div>
            {isLoggedIn && <Redirect to="/" />}
            <p>Create an account!</p>
            <form onSubmit={handleOnSubmit}>
                <label for="">Username:</label>
                <input
                    onChange={e => dispatch(setUsername(e.target.value))}
                    name="username"
                    type="text"
                ></input>
                <br /> 
                <label for="">Password:</label>
                <input
                    onChange={e => dispatch(setPassword(e.target.value))}
                    name="password"
                    type="password"
                ></input>
                <br />
                <button type="submit">JOIN</button>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    isLoggedIn: state.userReducer.isLoggedIn,
    username: state.userReducer.username,
    password: state.userReducer.password
});

export default connect(mapStateToProps)(Signup);
