import React from 'react'
import {connect} from 'react-redux'



const Home = ({username}) =>{

    return(
        <div>
            <h1>Welcome {username}!</h1>
            <p>This is a note taking application for CSC 667 Homework 3</p>
        </div>
    )
}
const mapStateToProps = state =>({
    username: state.userReducer.username
})

export default connect(mapStateToProps)(Home);