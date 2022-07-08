import React from 'react'
import { SearchIcon, MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Header({ purple }) {
    const [search, setSearch] = useState('')
    const [isHidden, setIsHidden] = useState(true)
    const [currentFocus, setCurrentFocus] = useState(localStorage.getItem('currentFocus') || 'Top Anime')
    const navigate = useNavigate()

    const handleClick = (state) => {
        // console.log(state)
        setIsHidden(!isHidden)
    }

    const refs = [
        { desc: 'Top Anime', link: '/' },
        { desc: 'Releasing Today', link: '/anime/releasingtoday' },
        { desc: 'Random Anime', link: '/anime/random' },
        { desc: 'My Watchlist', link: '/user/watchlist' }]

    const handleSearch = (e) => {
        // e.preventDefault();
        navigate(`/search/${search}`)
    }

    const handleChange = (ref) => {
        console.log(ref)
        setCurrentFocus(ref.desc)
        localStorage.setItem('currentFocus', ref.desc)
        console.log(currentFocus)
        navigate(ref.link)
    }

    return (
        <div className={`flex md:flex-row flex-col text-center items-center py-5 md:h-20 md:justify-evenly border-b ${!purple ? 'border-purple-900' : 'border-white'} `}>
            <MenuIcon className={`md:hidden w-[30px] ${!purple ? 'text-purple-900' : 'text-white'} `} onClick={handleClick}></MenuIcon>
            <div className={`flex duration-1000 ease-linear ${isHidden ? 'hidden' : ''} md:flex items-center flex-col md:w-1/2 md:flex-row md:justify-between md:items-center ${!purple ? 'text-purple-900' : 'text-white'}  `}>
                {refs.map((ref, index) => {
                    return <div key={index} onClick={() => handleChange(ref)} className={`mt-2 hover:cursor-pointer ${currentFocus === ref.desc ? `border-b-2 ${!purple ? 'border-purple-900' : 'border-white'}` : ''}`}>{ref.desc}</div>
                })}
            </div>
            <div className={`flex ${isHidden ? 'hidden' : ''} mt-2 md:flex flex-row items-center justify-center md:w-1/4`}>
                <SearchIcon className={`md:w-[30px] h-[25px] hidden sm:flex ${!purple ? 'text-purple-900' : 'text-white'}`} strokeWidth={2}></SearchIcon>
                <form className='' onSubmit={handleSearch}>
                    <input placeholder='Search Anime...'
                        onChange={e => setSearch(e.target.value)}
                        className={` focus:outline-none ${!purple ? 'bg-purple-900 text-white' : 'bg-white text-purple-900'} rounded-lg px-4 py-1`}
                    ></input>
                </form>
            </div>
        </div>
    )
}

export default Header