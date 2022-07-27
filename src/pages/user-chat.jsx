import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { ChatList } from "../cmps/chat-list"
import { userService } from "../services/user.service"
import { loadUser, onUpdateUser } from "../store/action/user.actions"

export const UserChat = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const [user, setUser] = useState(null)
    const [loggedInUser, setLoggedInUser] = useState(null)
    const [emptyMsg, setEmptyMsg] = useState({ txt: '' })
    const [msgsToSHow, setMsgsToShow] = useState(null)

    useEffect(() => {
        onLoadUser()
    }, [])


    const onLoadUser = async () => {
        const { _id } = params
        let loggedInUser = userService.getLoggedinUser()
        loggedInUser = await dispatch(loadUser(loggedInUser._id))
        const user = await dispatch(loadUser(_id))
        setUser(user)
        setLoggedInUser(loggedInUser)
        onSetMsgsToSHow(user, loggedInUser)
    }

    const handelChange = ({ target }) => {
        const val = target.value
        const field = target.name
        setEmptyMsg({ ...emptyMsg, [field]: val })
    }

    const onSubmit = async (ev) => {
        ev.preventDefault()
        const newMsg = {
            by: {
                username: loggedInUser.username,
                _id: loggedInUser._id
            },
            to: {
                username: user.username,
                _id: user._id
            },
            txt: emptyMsg.txt
        }
        onSendMsg(newMsg)
        onSetMsgsToSHow(user, loggedInUser)
    }

    const onSetMsgsToSHow = (user, loggedInUser) => {
        const msgs = user.messege.filter(msg => {
            console.log('msg.by._id:', msg.by._id)
            console.log('msg.to._id:', msg.to._id)
            console.log('user._id:', user._id)
            console.log('loggedInUser._id:', loggedInUser._id)
            if (msg.by._id === loggedInUser._id && msg.to._id === user._id ||
                msg.by._id === user._id && msg.to._id === loggedInUser._id) {
                console.log('in')
                return msg
            }
        })
        setMsgsToShow(msgs)
        console.log(msgs)
    }

    const onSendMsg = async (newMsg) => {
        user.messege.push(newMsg)
        loggedInUser.messege.push(newMsg)
        await dispatch(onUpdateUser(user))
        await dispatch(onUpdateUser(loggedInUser))
        setEmptyMsg({ txt: '' })
    }

    return <section className="user-chat flex column">

        <div>{user?.fullname}</div>
        <ChatList msgs={msgsToSHow} />

        <form onSubmit={onSubmit}>
            <div className="flex">
                <input onChange={handelChange} type="text" name="txt" placeholder="Send" value={emptyMsg.txt} />
                <button>{'>'}</button>
            </div>
        </form>

        <Link to='/user'>Back</Link>

    </section >
}