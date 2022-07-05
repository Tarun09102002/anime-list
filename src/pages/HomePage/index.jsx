import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import AnimeCard from '../../components/AnimeCard'

function HomePage() {

    const [topAnime, setTopAnime] = useState([])

    const fetchTopAnime = async () => {
        const res = await fetch('https://api.jikan.moe/v4/top/anime')
            .then(res => res.json())
            .catch(err => console.log(err))
        setTopAnime(res.data)
    }

    const animeComponent = topAnime.map((anime, index) => {
        return <div key={index} className='w-1/5 px-5 my-2'>
            <AnimeCard anime={anime} />
        </div>
    })

    useEffect(() => {
        fetchTopAnime()
        console.log(topAnime)
    }, [])

    return (
        <div className='w-screen flex justify-center min-h-screen bg-purple-900 font-display' >
            <div className='drop-shadow-2xl shadow-2xl w-2/3 min-h-screen flex flex-col bg-white'>
                <Header purple={false}></Header>
                <div className='flex flex-row flex-wrap my-10 justify-center'>
                    {animeComponent}
                </div>
            </div>
        </div >
    )
}

export default HomePage