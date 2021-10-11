import React from 'react'


const reducer = ( state = [], action ) => {


    switch(action.type){

        case "ADD_USER":          
            return  [...state, action.newUser]
        default:
            return state
    }
   
}

export default reducer
