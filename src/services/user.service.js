import { storageService } from './async-stoarge.service'
import { httpService } from './http.service.js'
import axios from 'axios'
import { movieService } from './movie-service'

const STORAGE_KEY = 'userDB'
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
    getById
}

window.us = userService

function getUsers() {
    return httpService.get(`user`)
}

function remove(userId) {
    return httpService.delete(`user/${userId}`)
}

async function update(user) {
    console.log(user)
    const savedUser = await httpService.put(`user/${user._id}`, user)
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
    const board = await movieService.save([])
    console.log(board)
    userCred.boards.push(board._id)
    const user = await httpService.post('auth/signup', userCred)
    board.ownerId = user._id
    await movieService.save(board)
    return saveLocalUser(user)
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
