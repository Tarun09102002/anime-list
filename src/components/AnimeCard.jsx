import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function AnimeCard({ anime }) {
    const navigate = useNavigate()

    const loadDetails = () => {
        navigate(`/anime/${anime.mal_id}`)
    }

    return (
        <article className='flex flex-col items-center'>
            <figure className='hover:cursor-pointer' onClick={loadDetails}>
                <img src={anime?.images?.jpg?.image_url} className='rounded-lg shadow-2xl object-cover h-[200px]' />
            </figure>
            <h3 className='pt-5 text-center text-purple-900 hover:cursor-pointer' onClick={loadDetails}>{anime.title}</h3>
        </article>
    )
}

export default AnimeCard