import { useEffect, useState } from 'react'
import { loadUsers, removeUser } from '../store/action/user.actions'
import { useDispatch, useSelector } from 'react-redux'
import { UserList } from '../cmps/user-list'
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

    const onRemoveUser = async (userId) => {
        await dispatch(removeUser(userId))
    }


    if (!users) return <div>loading...</div>
    return <section className="main-app flex column pad-10x">
        <div className="app-container flex column pad-10x">
            <h1>Users</h1>
            <Link to='/user/edit'>Add User</Link>
            <UserList users={users} onRemoveUser={onRemoveUser} />
        </div>
    </section>
}