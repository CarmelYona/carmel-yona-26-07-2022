import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { userService } from "../services/user.service"
import { onLogout } from '../store/action/user.actions'

export const AppHeader = () => {
    let { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const dispatch = useDispatch()
    const doLogout = async () => {
        await dispatch(onLogout())
    }

    return <header className="app-header flex" >
        <div className="header-wrapper flex">
            {loggedInUser ?
                <div className="user-avatar flex justify-center">{loggedInUser.fullname.charAt(0)}</div>
                :
                <></>
            }
            <h1><img src="./src/img/send.png" /> NetApp</h1>
        </div>
        <nav className="nav-links-wrapper flex ">
            {loggedInUser && <Link to="/" onClick={doLogout}>logout</Link>}
        </nav>
    </header >
}