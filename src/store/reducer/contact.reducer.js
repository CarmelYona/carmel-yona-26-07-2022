const initialState = {
    contacts: [],
}
export function contactReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {
        case 'SET_CONTACTS':
            newState = { ...state, contacts: action.contacts }
            break
        case 'SET_CONTACT':
            newState = { ...state, contact: action.contact }
            break
        case 'REMOVE_CONTACT':
            newState = state.contacts.filter(contact => contact._id !== action.contactId)
            return { ...state, contacts: newState }
        case 'ADD_CONTACT':
            newState = { ...state, contacts: [...state.contacts, action.contact] }
            break
        case 'UPDATE_CONTACT':
            newState = { ...state, contact: action.contact }
            break
        default:

    }
    window.contactState = newState
    return newState
}
