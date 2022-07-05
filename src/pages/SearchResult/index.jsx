import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Header from '../../components/Header'
import AnimeCard from '../../components/AnimeCard'

function SearchAnime() {
    const { search } = useParams()
    console.log(search)
    const [animeRes, setAnimeRes] = useState([])

    const fetchAnime = async () => {
        const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}`).then(res => res.json())
        setAnimeRes(res.data)
    }

    const animeComponent = animeRes.map((anime, index) => {
        return <div key={index} className='w-1/5 px-5 my-2'>
            <AnimeCard anime={anime} />
        </div>
    })

    useEffect(() => {
        fetchAnime()
    }, [search])

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

export default SearchAnime