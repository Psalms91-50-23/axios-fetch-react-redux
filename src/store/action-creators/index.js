const ADD_USER = 'ADD_USER'


export const addUser = (newUser) => {

    return {
        type: ADD_USER,
        newUser: newUser
    }
}