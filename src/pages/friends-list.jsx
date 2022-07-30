import { useEffect } from 'react'
import { loadUsers, removeUser, onUpdateFriendsAnMsg } from '../store/action/user.actions'
import { useDispatch, useSelector } from 'react-redux'
import { UserList } from '../cmps/user-list'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export const FriendsList = () => {
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
        onLoadUsers()
    }, [loggedInUser])


    const onLoadUsers = async () => {
        await dispatch(loadUsers())
    }

    const onRemoveUser = async (userId) => {
        await dispatch(removeUser(userId))
    }

    const onRemoveFriend = async (userId) => {
        const idx = loggedInUser.friendslist.findIndex(friendId => friendId === userId)
        loggedInUser.friendslist.splice(idx, 1)
        await dispatch(onUpdateFriendsAnMsg(loggedInUser))
    }

    if (!users) return <div>loading...</div>
    return <section className="friends-list flex column pad-10x">

        <div className="users-container flex column pad-10x">
            <Link to="/users"><h1>Search Friends</h1></Link>
            {users ?
                <>
                    <div> {users.length} Connections</div>
                    <UserList type="friends-list" users={users} onRemoveUser={onRemoveUser} onRemoveFriend={onRemoveFriend} />
                </>
                :
                <div>No Friends Yet</div>
            }
        </div>

    </section>
}