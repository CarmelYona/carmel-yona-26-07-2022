import { useSelector } from 'react-redux'
import { Link, NavLink } from "react-router-dom"

export const UserPreview = ({ user, onRemoveUser, type, onAddFriend, onRemoveFriend }) => {
    let { loggedInUser } = useSelector((storeState) => storeState.userModule)

    return <section className="user-preview flex pad-10x ">

        <div className="user-info flex column" title={`Click To Chat ${user.username}`}>
            <NavLink to={`/user/chat/${user._id}`}>
                <h3>{user.username}</h3>
                <h6>{user.email}</h6>
            </NavLink>
        </div>

        <div className="action-container flex column">
            {loggedInUser?.isAdmin &&
                <div className="user-action flex">
                    <button onClick={() => onRemoveUser(user._id)} >X</button>
                    <button  ><Link to={`/user/edit/${user._id}`}>Edit</Link> </button>
                </div>
            }
            <div className="user-action flex">
                {type === 'unconnected' ?
                    <button onClick={() => onAddFriend(user._id)}>
                        'Connect'
                    </button>
                    :
                    <button onClick={() => onRemoveFriend(user._id)}>
                        'disconnect'
                    </button>
                }
            </div>
        </div>

    </section>
}