import React, { useState } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

function Register({ setIsLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const registerUser = async (e) => {
        e.preventDefault()
        console.log(username, password)
        setIsLogin(true)

        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/register`, {
            username: username,
            password: password
        })

        console.log(res)
    }

    return (
        <div className='flex items-center h-full'>
            <form onSubmit={registerUser}>
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
                <input type="submit" value="Register" className='bg-white text-purple-900 px-3 py-1 rounded-lg hover:cursor-pointer drop-shadow-2xl hover:shadow-2xl' />
            </form>
        </div>
    )
}

export default Register