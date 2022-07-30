import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { onLogout } from '../store/action/user.actions'
import { TbSend } from "react-icons/tb"

export const AppHeader = () => {
    let { loggedInUser } = useSelector((storeState) => storeState.userModule)
    const dispatch = useDispatch()
    const doLogout = async () => {
        await dispatch(onLogout())
    }

    return <header className="app-header flex" >
        <div className="header-wrapper flex">
            <h1>NetApp<span><TbSend /></span></h1>
        </div>
        <nav className="nav-links-wrapper flex ">
            {loggedInUser ?
                <div className="user-avatar flex justify-center">{loggedInUser.fullname}</div>
                :
                <></>
            }
            {loggedInUser && <Link to="/" onClick={doLogout}>logout</Link>}
        </nav>
    </header >
}