import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { loadUser, onUpdateUser, onAddUser } from "../store/action/user.actions"

export const UserEdit = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        onLoadUser()
    }, [])

    const onLoadUser = async () => {
        const { _id } = params
        console.log(params)
        if (_id !== 'add') {
            const user = await dispatch(loadUser(_id))
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
            await dispatch(onUpdateUser(user))
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
    return <section className="edit-user">
        <h1> edit user</h1>
        {user?._id && <h1>{user.fullname}</h1>}
        {user?._id && <h1>{user.email}</h1>}
        <form onSubmit={onSubmit} className="flex column">
            <input onChange={handelChange} type="text" name="fullname" placeholder="Full Name" value={user?.fullname} id="" />
            <input onChange={handelChange} type="text" name="email" placeholder="Email" value={user?.email} id="" />
            <input onChange={handelChange} type="text" name="username" placeholder="User Name" value={user?.username} id="" />
            {!user?._id &&
                <input onChange={handelChange} type="number" name="password" placeholder="Password" value={user?.password} id="" />
            }
            <button>Save</button>
        </form>
        <Link to="/user">Back</Link>
    </section>
}