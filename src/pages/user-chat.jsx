import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { loadUser } from "../store/action/user.actions"

export const UserChat = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const [user, setUser] = useState(null)

    useEffect(() => {
        onLoadUser()
    }, [])

    const onLoadUser = async () => {
        const { _id } = params
        const user = await dispatch(loadUser(_id))
        setUser(user)
    }

    return <section className="user-chat flex column">
        {user?.fullname}
        <Link to='/user'>Back</Link>
    </section>
}