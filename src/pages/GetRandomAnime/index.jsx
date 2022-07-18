import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Loading from '../../components/Loading'
import AnimeDetailedComponent from '../../components/AnimeDetailedComponent'

function RandomAnime() {

    const [anime, setAnime] = useState('')

    const fetchAnime = async () => {
        const res = await fetch(`https://api.jikan.moe/v4/random/anime`).then(res => res.json())
        setAnime(res.data)
    }

    useEffect(() => {
        fetchAnime()
    }, [])


    return (
        anime ? (<AnimeDetailedComponent anime={anime} />) : (<Loading />)
    )
}

export default RandomAnime