import { MainApp } from "./pages/contact-app"
import { ContactEdit } from "./pages/contact-edit"
import { HomePage } from "./pages/home-page"
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"

export default [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/login',
        element: <Login />
    }, {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/contact',
        element: <MainApp />
    },
    {
        path: '/contact/edit/:_id',
        element: <ContactEdit />
    },
]