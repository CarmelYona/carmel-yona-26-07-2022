import { NavLink } from "react-router-dom";

export function UserPreview({  user, onRemoveUser }) {
    return <section className="user-preview flex pad-10x ">
        <div className="user-info flex column">
            <NavLink to={`/user/edit/${user._id}`}>
                <h3>{user.fullname}</h3>
                <h6>{user.email}</h6>
            </NavLink>
        </div>
        <div className="user-action flex">
            <button onClick={() => onRemoveUser(user._id)} >X</button>
            <button  ><NavLink to={`/user/edit/${user._id}`}>Edit</NavLink> </button>
        </div>

    </section>
}