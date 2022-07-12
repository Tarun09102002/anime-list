import React, { createContext, useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import AnimeDetails from './pages/AnimeDetails';
import SearchAnime from './pages/SearchResult';
import ReleasingToday from './pages/ReleasingToday';
import RandomAnime from './pages/GetRandomAnime';
import MyWatchlist from './pages/MyWatchlist';
import LoginPage from './pages/LoginPage';
import { CookiesProvider, Cookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux'
import { addToWatchList } from './app/feature/watchListSlice'
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import env from "react-dotenv"
import AuthApi from './contexts/AuthApi';
import WatchListApi from './contexts/WatchListApi'

function App() {

  axios.defaults.withCredentials = true

  const [auth, setAuth] = useState(true)
  const [watchList, setWatchList] = useState([])
  const getWatchList = async () => {
    const cookie = new Cookies
    const cookieSessionId = cookie.get('session')
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/watchlist`, {
      sessionId: cookieSessionId
    })
    setWatchList(res.data)
  }

  useEffect(() => {
    getWatchList()
  }, [])

  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <WatchListApi.Provider value={{ watchList, setWatchList }}>
        <CookiesProvider>
          <div className="App font-display">
            <Routes>
              <Route element={<ProtectedRoutes auth={auth} />}>
                <Route path="/" element={<HomePage />} />
              </Route>
              <Route path='/anime/:animeid' element={<AnimeDetails />}></Route>
              <Route path='/search/:search' element={<SearchAnime />}></Route>
              <Route path='/anime/releasingtoday' element={<ReleasingToday />}></Route>
              <Route path='/anime/random' element={<RandomAnime />}></Route>
              <Route path='/user/watchlist' element={<MyWatchlist />}></Route>
              <Route path='/user/login' element={<LoginPage />}></Route>
            </Routes>
            <ToastContainer />
          </div>
        </CookiesProvider>
      </WatchListApi.Provider>
    </AuthApi.Provider>
  );
}

const ProtectedRoutes = ({ auth }) => {
  return (
    auth ? <Outlet /> : <Navigate to="/user/login" />
  )
}

export default App;
