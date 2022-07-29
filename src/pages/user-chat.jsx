import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { ChatList } from "../cmps/chat-list"
import { socketService } from "../services/socket.service"
import { userService } from "../services/user.service"
import { loadUser, onUpdateUser } from "../store/action/user.actions"

export const UserChat = () => {
    const params = useParams()
    const dispatch = useDispatch()
    let { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const [user, setUser] = useState(null)
    const [emptyMsg, setEmptyMsg] = useState({ txt: '' })
    const [msgsToSHow, setMsgsToShow] = useState(null)

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
        const user = await userService.getById(_id)
        setUser(user)
        onFilterMsgs(user, loggedInUser)
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
        onFilterMsgs(user, loggedInUser)
    }

    const onFilterMsgs = (user, loggedInUser) => {
        const msgs = user.messege.filter(msg => {
            if (msg.by._id === loggedInUser._id && msg.to._id === user._id ||
                msg.by._id === user._id && msg.to._id === loggedInUser._id) {
                return msg
            }
        })
        setMsgsToShow(msgs)
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