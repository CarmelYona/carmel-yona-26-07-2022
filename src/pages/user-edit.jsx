import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { socketService } from "../services/socket.service"
import { userService } from "../services/user.service"
import { onAddUser } from "../store/action/user.actions"

export const UserEdit = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        socketService.off('update user', onLoadUser)
        socketService.on('update user', onLoadUser)
        onLoadUser()
        return (() => {
            socketService.off('update user', onLoadUser)
        })
    }, [params._id])

    const onLoadUser = async () => {
        const { _id } = params
        console.log(params)
        if (_id !== 'add') {
            const user = await userService.getById(_id)
            setUser(user)
        } else {
            setUser({
                fullname: '',
                email: '',
                paswword: '',
                username: ''
            })
        }
    }

    const onSubmit = async (ev) => {
        ev.preventDefault()
        if (params._id !== 'add') {
            await userService.update(user)
        } else {
            await dispatch(onAddUser(user))
        }
        navigate('/user')
    }

    const handelChange = ({ target }) => {
        const val = target.value
        const field = target.name
        setUser({ ...user, [field]: val })
    }
    return <section className="user-edit flex column justify-center pad-10x">
        <div className="user-edit-container flex column justify-center pad-10x">
            <header className="user-edit-header column flex justify-center pad-10x">
                <h1>Edit User</h1>
                {user?._id && <h3>Full Name: {user.fullname}</h3>}
                {user?._id && <h4>E-mail: {user.email}</h4>}
            </header>

            <main className="user-edit-body flex column justify-center pad-10x">
                <form onSubmit={onSubmit} className="flex column justify-center">
                    <input onChange={handelChange} type="text" name="fullname" placeholder="Full Name" value={user?.fullname} id="" />
                    <input onChange={handelChange} type="text" name="email" placeholder="Email" value={user?.email} id="" />
                    <input onChange={handelChange} type="text" name="username" placeholder="User Name" value={user?.username} id="" />
                    {!user?._id &&
                        <input onChange={handelChange} type="number" name="password" placeholder="Password" value={user?.password} id="" />
                    }
                    <button className="flex justify-center pad-10x">Save</button>
                </form>
                <Link to="/user">Back</Link>
            </main>
        </div>
    </section>
}