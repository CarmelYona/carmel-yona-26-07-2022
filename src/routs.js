import { MainApp } from "./pages/user-app"
import { UserEdit } from "./pages/user-edit"
import { HomePage } from "./pages/home-page"
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"
import { UserChat } from "./pages/user-chat"

export default [
    {
        path: '/user/chat/:_id',
        element: <UserChat />
    },
    {
        path: '/user/edit/:_id',
        element: <UserEdit />
    },
    {
        path: '/user',
        element: <MainApp />
    },
    {
        path: '/signup',
        element: <Signup />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <HomePage />
    },
]