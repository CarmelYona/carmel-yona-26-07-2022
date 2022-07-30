import { useSelector } from 'react-redux'
import { Link, NavLink } from "react-router-dom"
import { BsTrash, BsPencil } from 'react-icons/bs'
export const UserPreview = ({ user, onRemoveUser, type, onAddFriend, onRemoveFriend }) => {
    let { loggedInUser } = useSelector((storeState) => storeState.userModule)

    return <section className="user-preview flex pad-10x ">

        <div className="user-info flex column" title={`Click To Chat ${user.username}`}>
            <NavLink to={`/user/chat/${user._id}`}>
                <h3>{user.username}</h3>
                <h6>{user.email}</h6>
            </NavLink>
        </div>

        <div className="action-container flex ">
            <div className="user-action flex">
                {type === 'unconnected' ?
                    <button onClick={() => onAddFriend(user._id)}>
                        Connect
                    </button>
                    :
                    <button onClick={() => onRemoveFriend(user._id)}>
                        disconnect
                    </button>
                }
            </div>
            {loggedInUser?.isAdmin &&
                <div className="admin-action flex">
                    <button className="btn-trash flex justify-center" onClick={() => onRemoveUser(user._id)} ><BsTrash /></button>
                    <button className="btn-edit flex justify-center" ><Link to={`/user/edit/${user._id}`}><BsPencil /></Link> </button>
                </div>
            }
        </div>

    </section>
}