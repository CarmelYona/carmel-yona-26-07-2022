import { userService } from '../../services/user.service'



const initialState = {
    user: userService.getLoggedinUser(),
    users: [],
}

export function userReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_USER':
            newState = { ...state, user: action.user }
            break
        case 'REMOVE_USER':
            newState = {
                ...state,
                users: state.users.filter(user => user._id !== action.userId)
            }
            break
        case 'ADD_USER':
            newState = { ...state, users: [action.user, ...state.users], }
            break
        case 'SET_USERS':
            newState = { ...state, users: action.users }
            break
        default:
    }
    // For debug:
    // window.userState = newState;
    return newState

}
