import { combineReducers } from "redux";
import randomUsersReducers from './randomUsersReducers'

export default combineReducers({

    randomUsers: randomUsersReducers
})

