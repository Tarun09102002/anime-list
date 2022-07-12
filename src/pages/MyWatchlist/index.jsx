import React from 'react'
import { useSelector } from 'react-redux'
import { useState, useEffect, useContext } from 'react'
import AnimeComponent from '../../components/AnimeComponent'
import Header from '../../components/Header'
import { Cookies } from 'react-cookie';
import axios from 'axios'
import Loading from '../../components/Loading'
import env from 'react-dotenv'
import WatchListApi from '../../contexts/WatchListApi'

function MyWatchlist() {
    const { watchList } = useContext(WatchListApi)
    const [animeList, setAnimeList] = useState([])
    const [animeWatchList, setAnimeWatchList] = useState([])

    // const getWatchList = async () => {
    //     const cookie = new Cookies
    //     const cookieSessionId = cookie.get('session')
    //     const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/watchlist`, {
    //         sessionId: cookieSessionId
    //     }, { withCredentials: true })
    //     console.log(res.data)
    //     setAnimeList(res.data)
    // }
    // const updateWatchList = () => {
    //     console.log('here')
    //     const tempList = []
    //     animeWatchList.forEach(async (id) => {
    //         console.log(id)
    //         const res = await axios.get(`https://api.jikan.moe/v4/anime/${id}`).catch(err => console.log(err))
    //         // console.log(res.data)
    //         tempList.push(res.data)
    //     })
    //     console.log(tempList)
    //     setAnimeList(tempList)
    // }

    useEffect(() => {
        console.log(watchList)
        // getWatchList()
    }, [])

    // useEffect(() => {
    //     updateWatchList()
    // }, [animeWatchList])

    return (
        watchList.length > 0 ?
            <div className='w-screen flex justify-center min-h-screen bg-purple-900 font-display' >
                <div className='drop-shadow-2xl shadow-2xl w-2/3 min-h-screen flex flex-col bg-white'>
                    <Header purple={false}></Header>
                    <AnimeComponent animeList={watchList} />
                </div>
            </div > :
            <Loading />
    )
}

export default MyWatchlist