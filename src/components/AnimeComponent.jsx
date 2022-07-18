import React from 'react'
import AnimeCard from './AnimeCard'
import Logout from './Logout'

function AnimeComponent({ animeList }) {

    return (
        <div className='flex flex-col items-center w-full'>
            <div className='flex md:flex-row w-full md:justify-center  flex-col flex-wrap my-10 items-center'>
                {
                    animeList.map((anime, index) => {
                        return <div key={index} className='lg:w-1/4 xl:w-1/5 md:w-1/3 sm:w-2/3 w-full h-[300px] px-5 my-2'>
                            {anime ? <AnimeCard anime={anime} /> : null}
                        </div>
                    }).filter((anime) => anime !== null)
                }
            </div>
            <Logout purple={true} />
        </div>

    )
}

export default AnimeComponent