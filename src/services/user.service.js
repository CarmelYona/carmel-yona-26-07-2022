import { httpService } from './http.service.js'
import { socketService } from './socket.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const BASE_URL = 'http://localhost:3030/api/auth'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    getUsers,
    remove,
    update,
    addUser,
    getById,
    updateFriends
}

window.us = userService

async function getUsers(filterBy) {
    const loggedinUser = getLoggedinUser()
    let users = await httpService.get(`user`)
    users = users.filter(user => user._id !== loggedinUser._id)
    let accUsers = []

    if (filterBy === 'unconnected') {
        users.forEach(user => {
            if (loggedinUser.friendslist && !loggedinUser.friendslist.length) return accUsers = users
            loggedinUser.friendslist.forEach(friendId => {
                if (user._id === friendId) {
                    accUsers.push(user)
                }
            })
        })
    } else {
        users.forEach(user => {
            if (loggedinUser.friendslist && !loggedinUser.friendslist.length) return
            loggedinUser.friendslist.forEach(friendId => {
                if (user._id !== friendId) {
                    accUsers.push(user)
                }
            })
        })
    }
    return accUsers
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    socketService.emit('update user', user)
    const savedUser = await httpService.put(`user/${user._id}`, user)
    if (getLoggedinUser()._id === savedUser._id) saveLocalUser(savedUser)
    return savedUser;
}
async function updateFriends(user) {
    socketService.emit('update user', user)
    const savedUser = await httpService.put(`user/friendsList/${user._id}`, user)
    if (getLoggedinUser()._id === savedUser._id) saveLocalUser(savedUser)
    return savedUser;
}

async function getById(userId) {
    const user = await httpService.get(`user/${userId}`)
    return user;
}

async function login(userCred) {
    const user = await httpService.post('auth/login', userCred)
    if (user) return saveLocalUser(user)
}
async function signup(userCred) {
    const user = await httpService.post('auth/signup', userCred)
    return saveLocalUser(user)
}
async function addUser(userCred) {
    return await httpService.post('user/add', userCred)
}
async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
    return await httpService.post('auth/logout')
}



function saveLocalUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}
