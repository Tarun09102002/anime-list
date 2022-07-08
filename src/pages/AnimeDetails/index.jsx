import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import { useState, useEffect } from 'react'
import AnimeDetailedComponent from '../../components/AnimeDetailedComponent'
import Loading from '../../components/Loading'

function AnimeDetails() {
    const { animeid } = useParams()
    const navigate = useNavigate()
    const [anime, setAnime] = useState('')


    const fetchAnime = async () => {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${animeid}/full`)
            .then(res => res.json())
            .catch(err => console.log(err))
        console.log(res)
        setAnime(res.data)
    }

    useEffect(() => {
        fetchAnime()
    }, [animeid])


    return (
        anime ? (<AnimeDetailedComponent anime={anime} />) : <Loading />
    )
}

export default AnimeDetails