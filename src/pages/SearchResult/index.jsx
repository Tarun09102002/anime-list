import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../components/Header'
import AnimeCard from '../../components/AnimeCard'
import AnimeComponent from '../../components/AnimeComponent'

function SearchAnime() {
    const { search } = useParams()
    console.log(search)
    const [animeRes, setAnimeRes] = useState([])

    const fetchAnime = async () => {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`).then(res => res.json())
        setAnimeRes(res.data)
    }

    useEffect(() => {
        fetchAnime()
    }, [search])

    return (
        <div className='w-screen flex justify-center min-h-screen bg-purple-900 font-display' >
            <div className='drop-shadow-2xl shadow-2xl w-2/3 min-h-screen flex flex-col bg-white'>
                <Header purple={false}></Header>
                <AnimeComponent animeList={animeRes} />
            </div>
        </div >
    )
}

export default SearchAnime