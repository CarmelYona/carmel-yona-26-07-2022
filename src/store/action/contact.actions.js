import { contactService } from "../../services/contact.service.js"

// Action Creators:
export function getActionLoadContact(contact) {
    return {
        type: 'SET_CONTACT',
        contact
    }
}

export function getActionLoadContacts(contacts) {
    return {
        type: 'SET_CONTACTS',
        contacts
    }
}

export function getActionRemoveContacts(contactId) {
    return {
        type: 'REMOVE_CONTACT',
        contactId
    }
}

export function getActionAddContact(contact) {
    return {
        type: 'ADD_CONTACT',
        contact
    }
}

export function getActionUpdateContact(contact) {
    return {
        type: 'UPDATE_CONTACT',
        contact
    }
}

export function getActionSetContact(contact) {
    return {
        type: 'UPDATE_CONTACT',
        contact
    }
}

var subscriber

export function loadcontact(contactId) {
    return (dispatch) => {
        contactService.getById(contactId)
            .then(contact => {
                dispatch({
                    type: 'SET_CONTACT',
                    contact
                })
            })
            .catch(err => {
                console.log('Cannot load contacts', err)
            })

        if (subscriber) contactService.unsubscribe(subscriber)
        subscriber = (ev) => {
            dispatch(ev.data)
        }
    }
}

export function loadContacts() {
    return async (dispatch) => {
        try {
            const contacts = await contactService.query()
            dispatch(getActionLoadContacts(contacts))
            return contacts
        } catch (err) {
            console.log('Cannot load contacts', err)
        }
    }
}

export function removeContact(contactId) {
    return async (dispatch) => {
        try {
            await contactService.remove(contactId)
            dispatch(getActionRemoveContacts(contactId))
        } catch (err) {
            console.log('Cannot remove contact', err)
        }
    }
}

export function saveContact(contact) {
    return async (dispatch) => {
        try {
            const savedContact = await contactService.save(contact)
            dispatch(getActionSetContact(savedContact))
            return savedContact
        } catch (err) {
            console.log('Cannot add contact', err)

            throw err
        }
    }
}
// export function setFilterBy(filterBy, contactId) {
//     return async (dispatch) => {
//         const contact = await filterByName(filterBy, contactId)
//         dispatch({ type: 'SET_CONTACT', contact })
//     }
// }



