import React from 'react'
import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function Header({ purple }) {
    const [search, setSearch] = useState('')
    const navigate = useNavigate()

    const handleSearch = (e) => {
        // e.preventDefault();
        navigate(`/search/${search}`)
    }

    return (
        <div className={`flex flex-row py-5 h-20 justify-evenly border-b ${!purple ? 'border-purple-900' : 'border-white'} `}>
            <div className={`flex items-center flex-row w-1/2 justify-between ${!purple ? 'text-purple-900' : 'text-white'}  `}>
                <a href="/">Top Anime</a>
                <a href="/anime/releasingtoday">Releasing Today</a>
                <a href="/anime/random">Random Anime</a>
                <a href="/">Top Manga</a>
            </div>
            <div className='flex flex-row items-center w-1/4'>
                <SearchIcon className={`h-2/3 w-1/6 rounded-lg ${!purple ? 'text-purple-900' : 'text-white'}   py-1`} strokeWidth={2}></SearchIcon>
                <form className='w-5/6' onSubmit={handleSearch}>
                    <input placeholder='Search Anime...'
                        onChange={e => setSearch(e.target.value)}
                        className={`focus:outline-none ${!purple ? 'bg-purple-900 ' : 'bg-white'} rounded-lg ${!purple ? 'text-white' : 'text-purple-900'} px-4 py-1`}
                    ></input>
                </form>
            </div>
        </div>
    )
}

export default Header