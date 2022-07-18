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
    const [animeList, setAnimeList] = useState([])

    const getWatchList = async () => {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/watchlist`, { withCredentials: true })
        const tempList = res.data.watchlist.map((anime) => {
            return anime.animeDetails.data
        })
        setAnimeList(tempList)
    }

    useEffect(() => {
        getWatchList()
    }, [])


    return (
        animeList.length > 0 ?
            <div className='w-screen flex justify-center min-h-screen bg-purple-900 font-display' >
                <div className='drop-shadow-2xl shadow-2xl w-2/3 min-h-screen flex flex-col bg-white'>
                    <Header purple={false}></Header>
                    <AnimeComponent animeList={animeList} />
                </div>
            </div > :
            <Loading />
    )
}

export default MyWatchlist