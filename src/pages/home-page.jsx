import { useEffect } from "react";
import { Link } from "react-router-dom";
import { userService } from "../services/user.service";
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
    let navigate = useNavigate()

    useEffect(() => {
        onLoadUser()
    }, [])

    const onLoadUser = async () => {
        const user = userService.getLoggedinUser() //paramsId
        console.log(user)
        if (user) {
            navigate('/user')
        }
    }


    return <section className="Home-page">
        <div>
            <div>
                <Link to='/login' className="login" href="">Log in</Link>
            </div>

            <div>
                <Link to='/signup' className="signup" >Signup</Link>
            </div>
        </div>

    </section>
}