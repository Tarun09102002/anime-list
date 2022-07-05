import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import AnimeCard from '../../components/AnimeCard'
import AnimeComponent from '../../components/AnimeComponent'

function HomePage() {

    const [topAnime, setTopAnime] = useState([])

    const fetchTopAnime = async () => {
        const res = await fetch('https://api.jikan.moe/v4/top/anime')
            .then(res => res.json())
            .catch(err => console.log(err))
        setTopAnime(res.data)
    }

    useEffect(() => {
        fetchTopAnime()
        console.log(topAnime)
    }, [])

    return (
        <div className='w-screen flex justify-center min-h-screen bg-purple-900 font-display' >
            <div className='drop-shadow-2xl shadow-2xl w-2/3 min-h-screen flex flex-col bg-white'>
                <Header purple={false}></Header>
                <AnimeComponent animeList={topAnime} />
            </div>
        </div >
    )
}

export default HomePage