import React from 'react'
import Header from './Header'

function AnimeDetailedComponent({ anime }) {
    return (
        <div className='drop-shadow-2xl shadow-2xl w-full min-h-screen flex flex-col bg-purple-900'>
            <Header purple={true} ></Header>
            <div className='flex lg:flex-row  items-center text-center lg:text-left flex-col my-5 px-10 lg:px-40 lg:justify-evenly'>
                <a href={`https://gogoanime.lu//search.html?keyword=${anime.title}`}>
                    <img src={anime.images.jpg.large_image_url} className='rounded-lg shadow-2xl object-cover sm:h-[500px] h-[200px]' alt="" />
                </a>
                <div className='flex flex-col lg:w-2/3 w-full lg:mx-10 mt-10 text-white  justify-center'>
                    <div className=' md:text-5xl text-2xl'>{anime.title}</div>
                    <div className='mt-5 text-lg'>
                        {anime.aired.prop.from.day}/{anime.aired.prop.from.month}/{anime.aired.prop.from.year} - {anime.aired.prop.to.day}/{anime.aired.prop.to.month}/{anime.aired.prop.to.year}
                    </div>
                    <div className='text-lg'>
                        Status: {anime.airing ? 'Airing' : 'Finished'}
                    </div>
                    <div className='text-md mt-3'>
                        {anime.airing && anime.broadcast.string}
                    </div>
                    <div className='mt-5 text-sm text-purple-400'>
                        {anime.synopsis}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AnimeDetailedComponent