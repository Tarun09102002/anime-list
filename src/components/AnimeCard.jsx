import React from 'react'

function AnimeCard({ anime }) {
    return (
        <article>
            <a href={`/anime/${anime.mal_id}`} target="_blank" rel='noreferrer' className='flex flex-col items-center text-center'>
                <figure className='max-h-5/6'>
                    <img src={anime.images.jpg.image_url} className='rounded-lg shadow-2xl object-cover h-[200px]' />
                </figure>
                <h3 className='pt-5 text-purple-900 text-rob'>{anime.title}</h3>
            </a>
        </article>
    )
}

export default AnimeCard