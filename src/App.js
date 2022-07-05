import React from 'react';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom'
import AnimeDetails from './pages/AnimeDetails';
import SearchAnime from './pages/SearchResult';
import ReleasingToday from './pages/ReleasingToday';
import RandomAnime from './pages/GetRandomAnime';

function App() {
  return (
    <div className="App font-display">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/anime/:animeid' element={<AnimeDetails />}></Route>
        <Route path='/search/:search' element={<SearchAnime />}></Route>
        <Route path='/anime/releasingtoday' element={<ReleasingToday />}></Route>
        <Route path='/anime/random' element={<RandomAnime />}></Route>
      </Routes>
    </div>
  );
}

export default App;
