import React from 'react'
import AnimeCard from './AnimeCard'

function AnimeComponent({ animeList }) {

    return (
        <div className='flex md:flex-row md:justify-center  flex-col flex-wrap my-10 items-center'>
            {
                animeList.map((anime, index) => {
                    return <div key={index} className='lg:w-1/4 xl:w-1/5 md:w-1/3 sm:w-2/3 w-full h-[300px] px-5 my-2'>
                        {anime ? <AnimeCard anime={anime} /> : ''}
                    </div>
                })
            }
        </div>
    )
}

export default AnimeComponent