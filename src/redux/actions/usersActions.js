
export const setUsername = username =>({
    type: 'SET_USERNAME',
    username
})

export const setIsLoggedIn = (isLoggedIn) =>({
    type: 'SET_IS_LOGGED_IN',
    isLoggedIn
})


export const setPassword = (password) =>({
    type: 'SET_PASSWORD',
    password
})

export const setActiveUsers = (activeUsers) =>({
    type:'SET_ACTIVE_USERS',
    activeUsers
})