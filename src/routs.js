import { FriendsList } from "./pages/friends-list"
import { UserEdit } from "./pages/user-edit"
import { HomePage } from "./pages/home-page"
import { Login } from "./pages/login"
import { Signup } from "./pages/signup"
import { UserChat } from "./pages/user-chat"
import { MainApp } from "./pages/main-app"

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
        path: '/users',
        element: <MainApp />
    },
    {
        path: '/user',
        element: <FriendsList />
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