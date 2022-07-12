import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import Loading from './Loading'
import { ToastContainer, toast } from 'react-toastify';
import env from "react-dotenv"
import WatchListApi from '../contexts/WatchListApi'

function AnimeDetailedComponent({ anime }) {
    const { watchList, setWatchList } = useContext(WatchListApi)
    // const [watchList, setWatchList] = useState([])
    const [isInWatchList, setIsInWatchList] = useState(false)
    const cookies = new Cookies
    const cookieSession = cookies.get('session')

    const getWatchList = async () => {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/watchlist`, {
            sessionId: cookieSession
        }, { withCredentials: true })
        setWatchList(res.data)
    }
    const checkInWatchList = () => {
        watchList.forEach(item => {
            if (item && item.mal_id === anime.mal_id) {
                setIsInWatchList(true)
            }
        })
    }

    const addToWatchListFunction = async () => {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/add/watchlist`, {
            animeId: anime.mal_id,
            sessionId: cookieSession
        }, { withCredentials: true })
        console.log(res)
        setIsInWatchList(true)
        toast('Added to watchlist', {
            toastId: "custom-id",
            position: toast.POSITION.TOP_CENTER,
        })
    }


    const removeFromWatchListFunction = async () => {
        const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/remove/watchlist`, {
            animeId: anime.mal_id,
            sessionId: cookieSession
        }, { withCredentials: true })
        console.log(res)
        setIsInWatchList(false)
        toast('Removed from watchlist', {
            toastId: "custom-id",
            position: toast.POSITION.TOP_CENTER,
        })
    }

    const changeWatchList = () => {
        if (isInWatchList) {
            removeFromWatchListFunction()
        }
        else {
            addToWatchListFunction()
        }
    }

    const addToWatchListButton = () => {
        return (
            <div onClick={() => changeWatchList()} className='bg-white px-2 py-2 rounded-lg text-purple-900 hover:cursor-pointer'>{!isInWatchList ? 'Add To WatchList' : 'Remove from WatchList'}</div>
        )
    }

    useEffect(() => {
        getWatchList()
    }, [])

    useEffect(() => {
        console.log(watchList)
        watchList && checkInWatchList()
    }, [watchList])


    return (
        watchList.length > 0 ? (
            <div className='drop-shadow-2xl shadow-2xl w-full min-h-screen flex flex-col bg-purple-900'>
                <Header purple={true} ></Header>
                <div className='flex lg:flex-row  items-center text-center lg:text-left flex-col my-5 px-10 lg:px-40 lg:justify-evenly'>
                    <a href={`https://gogoanime.lu//search.html?keyword=${anime.title}`}>
                        <img src={anime.images.jpg.large_image_url} className='rounded-lg shadow-2xl object-cover sm:h-[500px] h-[200px]' alt="" />
                    </a>
                    <div className='flex flex-col lg:w-2/3 w-full lg:mx-10 mt-10 text-white lg:items-start justify-center'>
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
                        {addToWatchListButton()}
                        <div className='mt-5 text-sm text-purple-400'>
                            {anime.synopsis}
                        </div>
                    </div>
                </div>
            </div >) :
            <Loading />
    )
}

export default AnimeDetailedComponent