import { MainApp } from "./pages/user-app"
import { UserEdit } from "./pages/user-edit"
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
        path: '/user',
        element: <MainApp />
    },
    {
        path: '/user/edit/:_id',
        element: <UserEdit />
    },
]