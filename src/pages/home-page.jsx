import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return <section className="Home-page">
        Home Page
        <div>
            <Link to='/login' className="login" href="">Log in</Link>
        </div>

        <div>
            <Link to='/signup' className="signup" >Signup</Link>
        </div>
    </section>
}