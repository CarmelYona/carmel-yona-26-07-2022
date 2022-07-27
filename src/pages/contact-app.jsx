import { useEffect, useState } from 'react'
import { loadUsers, removeUser } from '../store/action/user.actions'
import { useDispatch, useSelector } from 'react-redux'
import { ContactList } from '../cmps/contact-list'
import { Link } from 'react-router-dom'

export const MainApp = () => {
    const dispatch = useDispatch()
    let { users } = useSelector((storeState) => storeState.userModule)

    useEffect(() => {
        onLoadUsers()
    }, [])

    const onLoadUsers = async () => {
        await dispatch(loadUsers())
    }

    const onRemoveContact = async (userId) => {
        await dispatch(removeUser(userId))
    }


    if (!users) return <div>loading...</div>
    return <section className="main-app flex column pad-10x">
        <div className="app-container flex column pad-10x">
            <h1>Contacts</h1>
            <Link to='/contact/edit'>Add User</Link>
            <ContactList contacts={users} onRemoveContact={onRemoveContact} />
        </div>
    </section>
}