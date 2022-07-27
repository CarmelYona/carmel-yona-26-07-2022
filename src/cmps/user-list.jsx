import { UserPreview as UserPreview } from "./user-preview"

export function UserList({ users, onRemoveUser }) {
    return <section className="user-list">
        {users && users.map(user => {
            return <UserPreview key={user._id} user={user} onRemoveUser={onRemoveUser} />
        })}


    </section>
}