import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../../components/Header'
import AnimeDetailedComponent from '../../components/AnimeDetailedComponent'

function RandomAnime() {

    const [anime, setAnime] = useState('')

    const fetchAnime = async () => {
        const res = await fetch(`https://api.jikan.moe/v4/random/anime`).then(res => res.json())
        console.log(res)
        setAnime(res.data)
    }

    useEffect(() => {
        fetchAnime()
    }, [])


    return (
        anime ? (<AnimeDetailedComponent anime={anime} />) : (<div>Loading....</div>)
    )
}

export default RandomAnime