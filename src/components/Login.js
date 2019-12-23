import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import md5 from "md5";
import axios from "axios";
import { setIsLoggedIn, setUsername, setPassword, setActiveUsers } from "../redux/actions/usersActions";

const options = {
    withCredentials: true
};

const Login = ({ dispatch, username, password, isLoggedIn }) => {

    const validate = (e) => {
        e.preventDefault()
        const body = {
            username,
            password: md5(password)
        };
        axios.post("/authserver/login", body, options).then(res => {
            if (res.data.valid) {
                dispatch(setIsLoggedIn(true));
                dispatch(setActiveUsers(res.data.counter))
                document.cookie = `username=${username}`;
                document.cookie = `activeusers=${res.data.counter}`
                document.cookie = `password=${md5(password)}`;
                document.cookie = `loggedin=true`;

            } else {
                dispatch(setIsLoggedIn(false));
                document.cookie = `username=`;
                document.cookie = `password=`;
                document.cookie = `loggedin=false`;
                console.log("Invalid user credentials");
            }
            console.log(res)
        })
        .catch(console.log())
    };

    return (
        <div>
            {isLoggedIn && <Redirect to="/" />}
            <form>
                <div>
                    <p>Username:</p>
                    <input name="username" type="text" onChange={(e)=>dispatch(setUsername(e.target.value))}></input>
                </div>

                <div>
                    <p>Password</p>
                    <input name="password" type="text" onChange={(e)=>dispatch(setPassword(e.target.value))}></input>
                </div>

                <button onClick={validate} type="button">
                    LOGIN
                </button>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({
    username: state.userReducer.username,
    password: state.userReducer.password,
    isLoggedIn: state.userReducer.isLoggedIn
});

export default connect(mapStateToProps)(Login);
