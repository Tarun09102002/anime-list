import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Header from '../../components/Header'

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
        anime ? (<div className='drop-shadow-2xl shadow-2xl w-full min-h-screen flex flex-col bg-purple-900'>
            <Header purple={true} ></Header>
            <div className='flex flex-row my-5 px-40 justify-evenly'>
                <a href={`https://gogoanime.lu//search.html?keyword=${anime.title}`}>
                    <img src={anime.images.jpg.large_image_url} className='rounded-lg shadow-2xl object-cover h-[500px]' alt="" />
                </a>
                <div className='flex flex-col w-2/3 mx-10 text-white  justify-center'>
                    <div className=' text-5xl'>{anime.title}</div>
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
        </div>) : (<div>Loading...</div>)
    )
}

export default RandomAnime