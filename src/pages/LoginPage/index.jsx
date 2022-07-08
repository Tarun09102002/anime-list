import React, { useState } from 'react'
import axios from 'axios'
import Register from '../../components/Register'
import Login from '../../components/Login'
function LoginPage() {

    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className='bg-purple-900 min-h-screen h-full w-full flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-row w-2/3 text-white font-display justify-between mb-10 '>
                    <div className={`text-lg ${isLogin && 'border-b-2'} hover:cursor-pointer`} onClick={() => setIsLogin(true)}>Login</div>
                    <div className={`text-lg ${!isLogin && 'border-b-2'} hover:cursor-pointer`} onClick={() => setIsLogin(false)}>Register</div>
                </div>
                <div className='justify-self-center'>
                    {
                        isLogin ? <Login /> : <Register setIsLogin={setIsLogin} />
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginPage