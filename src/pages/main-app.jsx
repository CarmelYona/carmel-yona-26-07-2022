import { Link } from "react-router-dom"
import { loadUsers, removeUser, onUpdatefriends } from '../store/action/user.actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { UserList } from "../cmps/user-list"
import { useNavigate } from 'react-router-dom'

export const MainApp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let { users, loggedInUser } = useSelector((storeState) => storeState.userModule)

    useEffect(() => {
        onLoadUsers()
    }, [])

    useEffect(() => {
        if (!loggedInUser) {
            navigate('/')
        }
    }, [loggedInUser])

    const onLoadUsers = async () => {
        await dispatch(loadUsers('unconnected'))
    }

    const onRemoveUser = async (userId) => {
        await dispatch(removeUser(userId))
    }

    const onAddFriend = async (userId) => {
        loggedInUser.friendslist.push(userId)
        await dispatch(onUpdatefriends(loggedInUser))
    }

    return <section className="main-app flex column">
        users page
        <div className="users-container flex column ">
            <Link to="/user">Friends List</Link>
            {loggedInUser?.isAdmin && <Link to="/user/edit/add">Add User</Link>}
            <UserList type="unconnected" users={users} onRemoveUser={onRemoveUser} onAddFriend={onAddFriend} />
        </div>
    </section>
}