import React from "react";
import { connect } from "react-redux";
import {Link } from "react-router-dom";
import { setIsLoggedIn, setUsername, setActiveUsers } from "../redux/actions/usersActions";

const NavBar = ({ dispatch, username, isLoggedIn,activeUsers }) => {
    const handleOnClick = ()=>{
        dispatch(setIsLoggedIn(false))
        dispatch(setUsername(''))
        dispatch(setActiveUsers(--activeUsers))
        document.cookie =`loggedin=false`
        document.cookie = `activeusers=${activeUsers}`
        document.cookie =`username=`
    }

    return (
        <div>
            <nav>
                <ul className="nav-links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <span>Note Taking App</span>
                    <Link to="/viewNotes">
                        <li>View All Notes</li>
                    </Link>
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login">
                                <li>Login</li>
                            </Link>
                            <Link to="/register">
                                <li>Signup</li>
                            </Link>
                        </>
                    ) : (
                        <>
                            <p>Hello, {username}</p>
                            <p>
                                <button onClick = {handleOnClick} >Log out</button>
                            </p>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
};

const mapStateToProps = state => ({
    username: state.userReducer.username,
    isLoggedIn: state.userReducer.isLoggedIn,
    activeUsers: state.userReducer.activeUsers,
});

export default connect(mapStateToProps)(NavBar);
