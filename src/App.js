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
import axios from 'axios'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AuthApi from './contexts/AuthApi';

function App() {

  axios.defaults.withCredentials = true

  const [auth, setAuth] = useState(false)

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/users/login`)
      .then(res => {
        console.log('res', res)
        if (res.data.loggedIn) {
          setAuth(true)
          sessionStorage.setItem('auth', true)
        }
      })
      .catch(err => {
        console.log('err', err)
      }
      )
  }, [])

  return (
    <AuthApi.Provider value={{ auth, setAuth }}>
      <div className="App font-display">
        <Routes>
          <Route element={<ProtectedRoutes auth={auth} />}>
            <Route path="/" element={<HomePage />} />
            <Route path='/anime/:animeid' element={<AnimeDetails />}></Route>
            <Route path='/search/:search' element={<SearchAnime />}></Route>
            <Route path='/anime/releasingtoday' element={<ReleasingToday />}></Route>
            <Route path='/anime/random' element={<RandomAnime />}></Route>
            <Route path='/user/watchlist' element={<MyWatchlist />}></Route>
          </Route>
          <Route path='/user/login' element={<LoginPage />}></Route>
        </Routes>
        <ToastContainer />
      </div>
    </AuthApi.Provider>
  );
}

const ProtectedRoutes = ({ auth }) => {
  console.log('auth', auth)

  return (
    sessionStorage.getItem('auth') ? <Outlet /> : <Navigate to="/user/login" />
  )
}

export default App;
