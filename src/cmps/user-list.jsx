import { UserPreview } from "./user-preview"

export function UserList({ users, onRemoveUser, type, onRemoveFriend, onAddFriend }) {
    return <section className="user-list pad-10x">

        {users && users.map(user => {
            return <UserPreview type={type} key={user._id} user={user} onRemoveUser={onRemoveUser} onRemoveFriend={onRemoveFriend} onAddFriend={onAddFriend} />
        })}
    </section>
}