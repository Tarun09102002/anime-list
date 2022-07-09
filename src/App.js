import React, { useEffect } from 'react';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom'
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



function App() {
  // console.log(env)
  console.log(process.env)
  return (
    <CookiesProvider>
      <div className="App font-display">
        <Routes>
          <Route path="/" element={<HomePage />} />
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
  );
}

export default App;
