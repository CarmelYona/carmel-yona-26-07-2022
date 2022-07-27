import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { userService } from "../services/user.service"
import { loadUser } from "../store/action/user.actions"
import { utilService } from "../services/util.service"

export const AppHeader = () => {
    const dispatch = useDispatch()
    let { user } = useSelector((storeState) => storeState.userModule)
    useEffect(() => {
        onLoadUser()
    }, [])

    const onLoadUser = async () => {
        const user = userService.getLoggedinUser() //paramsId
        if (user) {
            await dispatch(loadUser(user._id))
        }
    }

    return <header className="app-header flex" >
        <div className="flex">
            {user ?
                <div style={{ backgroundColor: utilService.getRandomColor() }} className="user-avatar flex justify-center">{user.fullname.charAt(0)}</div>
                :
                <></>
            }
            <h1>NetApp</h1>
        </div>
        <nav className="nav-links-wrapper flex ">
            {user && <Link to="/" onClick={userService.logout}>logout</Link>}
        </nav>
    </header >
}