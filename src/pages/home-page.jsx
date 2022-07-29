import { useSelector } from 'react-redux'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
    let navigate = useNavigate()
    let { loggedInUser } = useSelector((storeState) => storeState.userModule)

    useEffect(() => {
        if (loggedInUser) {
            navigate('/user')
        }
    }, [loggedInUser])

    return <section className="home-page flex pad-10x">

        <div className="home-page-container flex column pad-10x">
            <div className="headers-wrapper flex column pad-10x">
                <h2>Simple, Safe</h2>
                <h3>Messeges Live.</h3>
            </div>
            <div className="p-container ">
                <p>Net.App allows you to send and receive messages in a fast, simple and secure way, and also chat on the phone for free.
                    Available on devices all over the world.</p>
            </div>

            <div className="action-container flex column">
                <Link to='/login' className="login" href="">Log in</Link>
                <Link to='/signup' className="signup" >Signup</Link>
            </div>

        </div>

    </section>
}