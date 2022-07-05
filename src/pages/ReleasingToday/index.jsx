import React from 'react'
import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import AnimeCard from '../../components/AnimeCard'

function ReleasingToday() {
    const [day, setDay] = useState('')
    const [anime, setAnime] = useState([])
    const days = { 1: 'monday', 2: 'tuesday', 3: 'wednesday', 4: 'thursday', 5: 'friday', 6: 'saturday', 7: 'sunday' }

    const getDay = () => {
        const date = new Date()
        const day = date.getDay()
        setDay(days[day])
    }

    const fetchAnime = async () => {
        const res = await fetch(`https://api.jikan.moe/v4/schedules?filter=sunday`)
            .then(res => res.json())
            .catch(err => console.log(err))
        console.log(res)
        setAnime(res.data)
    }
    const animeComponent = anime.map((anime, index) => {
        return <div key={index} className='w-1/5 px-5 my-2'>
            <AnimeCard anime={anime} />
        </div>
    })

    useEffect(() => {
        getDay()
        console.log(day)
        fetchAnime()
    }, [day])

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

export default ReleasingToday