import React from 'react'
import { SearchIcon, MenuIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Header({ purple }) {
    const [search, setSearch] = useState('')
    const [isHidden, setIsHidden] = useState(true)
    const navigate = useNavigate()

    const handleClick = (state) => {
        // console.log(state)
        setIsHidden(!isHidden)
    }

    const refs = [
        { desc: 'Top Anime', link: '/' },
        { desc: 'Releasing Today', link: '/anime/releasingtoday' },
        { desc: 'Random Anime', link: '/anime/random' },
        { desc: 'Top Manga', link: '/' }]

    const handleSearch = (e) => {
        // e.preventDefault();
        navigate(`/search/${search}`)
    }

    return (
        <div className={`flex md:flex-row flex-col items-center py-5 md:h-20 md:justify-evenly border-b ${!purple ? 'border-purple-900' : 'border-white'} `}>
            <MenuIcon className={`md:hidden w-[30px] ${!purple ? 'text-purple-900' : 'text-white'} `} onClick={handleClick}></MenuIcon>
            <div className={`flex duration-1000 ease-linear ${isHidden ? 'hidden' : ''} md:flex items-center flex-col md:w-1/2 md:flex-row md:justify-between md:items-center ${!purple ? 'text-purple-900' : 'text-white'}  `}>
                {refs.map((ref, index) => {
                    return <a key={index} href={ref.link} className='mt-2'>{ref.desc}</a>
                })}
            </div>
            <div className={`flex ${isHidden ? 'hidden' : ''} mt-2 md:flex flex-row items-center justify-center md:w-1/4`}>
                <SearchIcon className={`md:w-[30px] md:h-[30px] hidden sm:flex ${!purple ? 'text-purple-900' : 'text-white'}`} strokeWidth={2}></SearchIcon>
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