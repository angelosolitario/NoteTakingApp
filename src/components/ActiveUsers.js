import React from "react";
import { connect } from "react-redux";

const ActiveUsers = ({activeUsers}) => {
    
    return (
        <div>
            <p>Active users: {activeUsers}</p>
        </div>
    );
};
const mapStateToProps = state => ({
    username: state.userReducer.username,
    activeUsers: state.userReducer.activeUsers,
    password: state.userReducer.password,

});

export default connect(mapStateToProps)(ActiveUsers);
