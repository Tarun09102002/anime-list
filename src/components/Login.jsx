import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Cookies } from 'react-cookie'
import env from 'react-dotenv'
import AuthApi from '../contexts/AuthApi'


function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const cookies = new Cookies
    const cookieSession = cookies.get('session')
    const { auth, setAuth } = useContext(AuthApi)


    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault()
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, {
            username: username,
            password: password
        }, { withCredentials: true })
        console.log(res)
        if (res.data.status === 'ok') {
            setAuth(true)
            navigate('/')
        }
    }

    const checkIfSession = async () => {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/login`)
        console.log(res)
    }

    useEffect(() => {
        checkIfSession()
    }, [])

    return (
        <div className='flex items-center h-full'>
            <form onSubmit={loginUser}>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="username"
                    placeholder="Username"
                    className=' focus:outline-none border-white border-2 mb-5 bg-purple-900 rounded-lg px-4 py-1'
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className=' focus:outline-none border-white border-2 mb-5 bg-purple-900 rounded-lg px-4 py-1'
                />
                <br />
                <input type="submit" value="Login" className='bg-white text-purple-900 px-3 py-1 rounded-lg hover:cursor-pointer drop-shadow-2xl hover:shadow-2xl' />
            </form>
        </div>
    )
}

export default Register