import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Logout({ purple }) {
    const navigate = useNavigate()
    const logOut = async () => {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/logout`, { withCredentials: true })
            .catch(err => console.log(err))
        navigate('/user/login')
    }

    return (
        <button className={`${purple ? 'text-white bg-purple-900' : 'text-purple-900 bg-white'} w-[150px] mb-20 rounded-lg py-2`} onClick={logOut}>LogOut</button>
    )
}

export default Logout