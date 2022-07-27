import { useEffect, useState } from 'react'
import { loadContacts, removeContact, updateContact } from '../store/action/contact.actions'
import { useDispatch, useSelector } from 'react-redux'
import { ContactList } from '../cmps/contact-list'
import { Link } from 'react-router-dom'

export const MainApp = () => {
    const dispatch = useDispatch()
    let { contacts } = useSelector((storeState) => storeState.contactModule)

    useEffect(() => {
        onLoadContacts()
        console.log(contacts)
    }, [])

    const onLoadContacts = async () => {
        await dispatch(loadContacts())
    }

    const onRemoveContact = async (contactId) => {
        await dispatch(removeContact(contactId))
    }


    if (!contacts) return <div>loading...</div>
    return <section className="main-app flex column pad-10x">
        <div className="app-container flex column pad-10x">
            <h1>Contacts</h1>
            <Link to='/contact/edit'>Add User</Link>
            <ContactList contacts={contacts} onRemoveContact={onRemoveContact} />
        </div>
    </section>
}